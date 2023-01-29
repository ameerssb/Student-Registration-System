# Generated by Django 4.1.4 on 2023-01-29 19:05

from django.db import migrations, models
import program.models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0041_alter_olevel_grade1_alter_olevel_grade2_and_more'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='file_awaiting_exam_slip',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_first_certificate',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_first_testimonial',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_identification',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_photo_passport',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_scratch_card',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_second_certificate',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
        migrations.AlterField(
            model_name='registration',
            name='file_second_testimonial',
            field=models.FileField(blank=True, null=True, upload_to=program.models.upload_location),
        ),
    ]
