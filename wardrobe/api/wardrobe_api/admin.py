from django.contrib import admin
from .models import Bin
# Register your models here.

@admin.register(Bin)
class BinAdmin(admin.ModelAdmin):
    pass