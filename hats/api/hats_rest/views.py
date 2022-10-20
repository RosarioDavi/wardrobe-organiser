from django.shortcuts import render
from common.json import ModelEncoder
from .models import LocationVO, Hat
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name"]


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["style_name", "id","color"]

    def get_extra_data(self, o):
        return {"location": o.location.closet_name} 


class HatDetailEncoder(ModelEncoder):
    model = Hat
    properties = [
        'style_name',
        'fabric',
        'color',
        'picture',
        'location'
    ]
    encoders = {'location': LocationVOEncoder()}

@require_http_methods(["GET", "POST"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats=Hat.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()

        return JsonResponse(
            {"hats": hats}, encoder = HatListEncoder
        )

    else: 
        content = json.loads(request.body)

        try: 
            location_href = content["location"]
            location = LocationVO.objects.get(location_id=location_href)
            content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {'message': "Invalid location id"},
                status=400
            )
        
        location = Hat.objects.create(**content)
        return JsonResponse(
            location,
            encoder=HatDetailEncoder,
            safe=False
        )

@require_http_methods(["GET", "DELETE", "PUT" ])
def api_show_hats(request, pk):
    if request.method == "GET":
        hat = Hat.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder=HatDetailEncoder,
            safe = False,
    )
    elif request.method == "DELETE":
        count, _ = Hat.objects.filter(id=pk).delete()
        return JsonResponse({"deleted": count > 0})
    else:
        content = json.loads(request.body)
        try:
            if "location" in content:
                location = LocationVO.objects.get(import_href=content["location"])
                content["location"] = location
        except LocationVO.DoesNotExist:
            return JsonResponse(
                {"message": "Invalid Location"},
                status=400
            )
        Hat.objects.filter(id=pk).update(**content)
        hat = Hat.objects.get(id=pk)
        return JsonResponse(
            hat,
            encoder = HatDetailEncoder,
            safe = False,
        )


