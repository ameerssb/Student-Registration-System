# Generated by Django 4.1.4 on 2023-01-12 15:44

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0003_remove_subject_program_course_combination'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='course',
            name='combination',
        ),
    ]
