from django.urls import path,include
from django.contrib.auth import views as auth_views
from program import views

urlpatterns = [
    path('', views.Home.as_view(), name="Ijmb_Home"),
    path('summary/<str:id>/', views.Summary.as_view(), name="Ijmb_Summary"),
    path('pre',views.Pre.as_view(), name='Pre'),
    path('register/', views.Register.as_view(),name='Ijmb_Register'),
]
