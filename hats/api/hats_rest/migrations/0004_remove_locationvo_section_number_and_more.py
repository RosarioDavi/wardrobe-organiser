# Generated by Django 4.0.3 on 2022-10-20 15:16

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('hats_rest', '0003_alter_locationvo_location_id'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='locationvo',
            name='section_number',
        ),
        migrations.RemoveField(
            model_name='locationvo',
            name='shelf_number',
        ),
    ]
