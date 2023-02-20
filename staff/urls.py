from django.urls import path,include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name="Staff_Home"),
    path('summary/<str:id>/', views.Summary.as_view(), name="Staff_Summary"),
]
