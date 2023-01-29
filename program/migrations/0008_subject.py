# Generated by Django 4.1.4 on 2023-01-12 15:54

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0007_delete_subject'),
    ]

    operations = [
        migrations.CreateModel(
            name='Subject',
            fields=[
                ('id', models.BigAutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('name', models.CharField(max_length=100, unique=True)),
                ('program_type', models.ForeignKey(on_delete=django.db.models.deletion.DO_NOTHING, to='program.program_type')),
            ],
        ),
    ]
