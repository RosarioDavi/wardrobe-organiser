from django.db import models
from django.forms import URLField

# Create your models here.
class BinVO(models.Model):
    closet_name = models.CharField(max_length=100)
    import_href = models.CharField(max_length=200, unique=True)

class Shoe(models.Model):
    shoe_name = models.CharField(max_length=100)
    color = models.CharField(max_length=50, null=True)
    picture_url = models.URLField(null=True, blank=True)
    bin = models.ForeignKey(
        BinVO, 
        related_name ="shoe",
        on_delete=models.CASCADE,
        null=True,
        blank=True
    )