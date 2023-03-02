from django.contrib import admin
from .models import User
from staff.models import Staff
# Register your models here.

@admin.register(User)
class CustomUserAdmin(admin.ModelAdmin):
    list_display = ['first_name','email','is_staff','is_superuser']
    # def get_queryset(self, request):
    #     qs = super().get_queryset(request)
    #     return qs.filter(is_superuser=False,is_staff=False)
