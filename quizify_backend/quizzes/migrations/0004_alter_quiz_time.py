# Generated by Django 5.0.3 on 2024-04-02 14:44

import datetime
from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('quizzes', '0003_alter_quiz_time'),
    ]

    operations = [
        migrations.AlterField(
            model_name='quiz',
            name='time',
            field=models.DateTimeField(default=datetime.datetime(2024, 4, 2, 14, 44, 54, 295813)),
        ),
    ]
