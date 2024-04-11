# accounts/models.py
from typing_extensions import Optional
from django.contrib.auth.models import User, AbstractUser
from django.db import models
from ..quizzes.models import Quiz

class CustomUser(AbstractUser):
    pass

class TestAttempted(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    quiz = models.ForeignKey(Quiz, on_delete=models.CASCADE)
    status = models.BooleanField(default=False)
