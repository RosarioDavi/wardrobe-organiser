from django.urls import path
from .views import api_list_hats, api_show_hats
from django.urls import path
urlpatterns = [
    path("hats/", api_list_hats, name = "api_list hats" ),
    path("hats/<int:pk>/", api_show_hats, name = "hats_delete"),
    
]