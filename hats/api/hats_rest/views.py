from django.shortcuts import render
from common.json import ModelEncoder
from .models import LocationVO, Hat
from django.http import JsonResponse
from django.views.decorators.http import require_http_methods
import json

class LocationVOEncoder(ModelEncoder):
    model = LocationVO
    properties = ["closet_name", "section_number", 'shelf_number']


class HatListEncoder(ModelEncoder):
    model = Hat
    properties = ["style_name"]

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

@require_http_methods(["GET", "POST", "DELETE"])
def api_list_hats(request, location_vo_id=None):
    if request.method == "GET":
        if location_vo_id is not None:
            hats=Hat.objects.filter(location=location_vo_id)
        else:
            hats = Hat.objects.all()

        return JsonResponse(
            {"hats": hats}, encoder = HatListEncoder
        )
    elif request.method == "DELETE":
        count, _ = Hat.objects.filter(id=location_vo_id).delete()
        return JsonResponse({"deleted": count > 0})
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


def api_show_hats(request, pk):
    hat = Hat.objects.get(id=pk)
    return JsonResponse(
        hat,
        encoder=HatDetailEncoder,
        safe = False,


    )


