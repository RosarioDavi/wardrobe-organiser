# Generated by Django 4.0.3 on 2022-10-20 00:24

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
    ]

    operations = [
        migrations.CreateModel(
            name='LocationVO',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('closet_name', models.CharField(max_length=100)),
                ('section_number', models.PositiveSmallIntegerField(null=True)),
                ('shelf_number', models.PositiveSmallIntegerField(null=True)),
                ('location_id', models.PositiveSmallIntegerField(null=True, unique=True)),
            ],
        ),
        migrations.CreateModel(
            name='Hat',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('style_name', models.CharField(max_length=20)),
                ('fabric', models.CharField(max_length=20, null=True)),
                ('color', models.CharField(max_length=20, null=True)),
                ('picture', models.URLField(null=True)),
                ('location', models.ForeignKey(null=True, on_delete=django.db.models.deletion.CASCADE, related_name='hat_location', to='hats_rest.locationvo')),
            ],
        ),
    ]
