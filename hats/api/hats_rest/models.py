from django.db import models

class LocationVO(models.Model):
    closet_name = models.CharField(max_length=100)
    location_id = models.PositiveSmallIntegerField(null=True, unique = True)


class Hat(models.Model):
    style_name = models.CharField(max_length=20)
    fabric = models.CharField(max_length=20, null=True)
    color = models.CharField(max_length=20, null=True)
    picture = models.URLField(null=True)
    location = models.ForeignKey(
        LocationVO,
        related_name="hat_location",
        on_delete=models.CASCADE,
        null= True
    )
