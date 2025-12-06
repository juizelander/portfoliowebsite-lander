from django.urls import path
from django_distill import distill_path
from . import views

def get_index():
    return [None]

urlpatterns = [
    distill_path('', views.home, name='home', distill_func=get_index),
]
