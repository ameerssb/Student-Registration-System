# Generated by Django 4.1.4 on 2023-01-12 15:40

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0002_rename_program_course'),
    ]

    operations = [
        migrations.RemoveField(
            model_name='subject',
            name='program',
        ),
        migrations.AddField(
            model_name='course',
            name='combination',
            field=models.ManyToManyField(to='program.subject'),
        ),
    ]