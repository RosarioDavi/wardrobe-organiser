import django
import os
import sys
import time
import json
import requests

sys.path.append("")
os.environ.setdefault("DJANGO_SETTINGS_MODULE", "shoes_project.settings")
django.setup()

from shoes_rest.models import BinVO, Shoe



# Import models from hats_rest, here.
# from shoes_rest.models import Something

def get_bins():
    response = requests.get("http://wardrobe-api:8000/api/bins/")
    content = json.loads(response.content)
    print(content)
    for bin in content["bins"]:
        BinVO.objects.update_or_create(
            import_href=bin["import_href"],
            defaults={
                "closet_name": bin["closet_name"],
                "bin_number": bin["bin_number"],
            },
        )


def poll():
    while True:
        print('Shoes poller polling for data')
        try:
            get_bins()
        except Exception as e:
            print(e, file=sys.stderr)
        time.sleep(5)


if __name__ == "__main__":
    poll()