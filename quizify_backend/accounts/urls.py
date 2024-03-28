# accounts/urls.py
from django.urls import path
from .views import UserRegistration
from .views import UserLogin

urlpatterns = [
    path('register/', UserRegistration.as_view(), name='user-registration'),
    path('login/', UserLogin.as_view(), name='user-login'),
    # Add other URL patterns as needed
]
