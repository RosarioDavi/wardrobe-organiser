from django.urls import path
from .views import api_list_hats
from django.urls import path
urlpatterns = [
    path("hats/", api_list_hats, name = "api_list hats" ),
    path("hats/<int:location_vo_id>/", api_list_hats, name = "hats_delete")
]