# Generated by Django 4.1.4 on 2023-01-12 16:32

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0013_alter_course_program_type_alter_subject_program_type_and_more'),
    ]

    operations = [
        migrations.AddField(
            model_name='course',
            name='faculty',
            field=models.ForeignKey(blank=True, null=True, on_delete=django.db.models.deletion.DO_NOTHING, to='program.faculty'),
        ),
    ]
