from django.contrib import admin
from .models import Session,Program_Type,Course,Subject,Faculty,Registration,Olevel,Grade,Status,Upload
# Register your models here.
Regfields = []
Olfields = []
for field in Registration._meta.get_fields():
    Regfields.append(field.name)
Regfields.remove('status')
Regfields.remove('olevel')
    
for field in Olevel._meta.get_fields():
    Olfields.append(field.name)


class RegistrationAdmin(admin.ModelAdmin):
    list_display = ['application_id','user','status']
    ordering = ['application_id']

class OlevelAdmin(admin.ModelAdmin):
    list_display = ['registration','o_level_status','examination_type']
    ordering = ['registration']
    

    # def save_model(self, request, obj, form, change):
    #     obj.user = request.user
    #     super().save_model(request, obj, form, change)

admin.site.register(Session)
admin.site.register(Program_Type)
admin.site.register(Course)
admin.site.register(Subject)
admin.site.register(Faculty)
admin.site.register(Registration,RegistrationAdmin)
admin.site.register(Olevel,OlevelAdmin)
admin.site.register(Grade)
admin.site.register(Status)
admin.site.register(Upload)