# Generated by Django 4.1.4 on 2023-01-19 07:34

from django.db import migrations


class Migration(migrations.Migration):

    dependencies = [
        ('program', '0029_alter_olevel_o_level_status'),
    ]

    operations = [
        migrations.RenameField(
            model_name='registration',
            old_name='subject1',
            new_name='p_subject1',
        ),
        migrations.RenameField(
            model_name='registration',
            old_name='subject2',
            new_name='p_subject2',
        ),
        migrations.RenameField(
            model_name='registration',
            old_name='subject3',
            new_name='p_subject3',
        ),
    ]
