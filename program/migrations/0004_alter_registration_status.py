# Generated by Django 4.1.4 on 2023-02-20 02:21

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0003_alter_registration_submitted'),
    ]

    operations = [
        migrations.AlterField(
            model_name='registration',
            name='status',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='program.status'),
        ),
    ]
