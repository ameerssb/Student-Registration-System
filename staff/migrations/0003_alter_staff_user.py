# Generated by Django 4.1.4 on 2023-02-20 02:07

from django.conf import settings
from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        migrations.swappable_dependency(settings.AUTH_USER_MODEL),
        ('staff', '0002_staff_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='staff',
            name='user',
            field=models.ForeignKey(default=3, on_delete=django.db.models.deletion.DO_NOTHING, to=settings.AUTH_USER_MODEL),
            preserve_default=False,
        ),
    ]
