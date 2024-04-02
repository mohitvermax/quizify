# models.py

from django.db import models
from django.contrib.auth.models import User
from datetime import datetime, timedelta

class Quiz(models.Model):
    title = models.CharField(max_length=100)
    description = models.TextField()
    created_by = models.ForeignKey(User, on_delete=models.CASCADE)
    startTime = models.DateTimeField(default=datetime.now())
    endTime = models.DateTimeField(default=datetime.now())

    def __str__(self):
        return self.title
    
    class Meta:
        app_label = 'quizzes'  # Add this line

class Question(models.Model):
    quiz = models.ForeignKey(Quiz, related_name='questions', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)

    def __str__(self):
        return self.text
    
    class Meta:
        app_label = 'quizzes'  # Add this line

class Answer(models.Model):
    question = models.ForeignKey(Question, related_name='answers', on_delete=models.CASCADE)
    text = models.CharField(max_length=255)
    is_correct = models.BooleanField(default=False)

    def __str__(self):
        return self.text

    class Meta:
        app_label = 'quizzes'  # Add this line
