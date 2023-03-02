from django.db import models
from account.models import User
from program.models import Faculty,Course
# Create your models here.

class Staff(models.Model):
    user = models.ForeignKey(User, on_delete=models.DO_NOTHING,)
    faculty = models.ForeignKey(Faculty, on_delete=models.DO_NOTHING)
    department = models.ForeignKey(Course,on_delete=models.DO_NOTHING)

    def __str__(self):
        return self.user.email
