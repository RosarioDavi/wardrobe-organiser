# Generated by Django 4.0.3 on 2022-10-20 15:12

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0001_initial'),
    ]

    operations = [
        migrations.AlterField(
            model_name='locationvo',
            name='location_id',
            field=models.PositiveSmallIntegerField(null=True),
        ),
    ]
