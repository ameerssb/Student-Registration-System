# Generated by Django 4.1.4 on 2023-01-12 15:53

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0006_remove_subject_name_remove_subject_program_id'),
    ]

    operations = [
        migrations.DeleteModel(
            name='Subject',
        ),
    ]