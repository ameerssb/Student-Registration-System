from django.urls import path,include
from django.contrib.auth import views as auth_views
from . import views

urlpatterns = [
    path('', views.Home.as_view(), name="Ijmb_Home"),
    path('pre',views.Pre, name='Pre'),
    path('register/', views.Register.as_view(),name='Ijmb_Register'),
]
