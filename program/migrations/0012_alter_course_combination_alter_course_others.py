# Generated by Django 4.1.4 on 2023-01-12 16:20

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0011_alter_course_combination'),
    ]

    operations = [
        migrations.AlterField(
            model_name='course',
            name='combination',
            field=models.ManyToManyField(blank=True, null=True, related_name='combination', to='program.subject'),
        ),
        migrations.AlterField(
            model_name='course',
            name='others',
            field=models.ManyToManyField(blank=True, null=True, related_name='others', to='program.subject'),
        ),
    ]
