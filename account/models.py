from django.db import models
# from program.models import Faculty,Course
from django.contrib.auth.models import AbstractUser
# Create your models here.


def upload_location(instance, filename):
	s = "%s/%s" %(instance.user.username, filename)
	return s

class User(AbstractUser):
	username = models.CharField(unique=False,max_length=50, blank=True)
	first_name = models.CharField(blank=False,null=False, max_length=50)
	last_name = models.CharField(blank=False,null=False, max_length=50)
	other_name = models.CharField(max_length=50,null=True,blank=True)
	email = models.EmailField(max_length=255, unique=True, blank=False, null=False)
	is_active = models.BooleanField(default=True)
	is_email_verified = models.BooleanField(default=False)
	phone = models.CharField(max_length=15, blank=False, null=True)
	profile_image=models.ImageField(upload_to=upload_location, null=True, default='default_user.png',blank=True)
	is_phone_verified = models.BooleanField(default=False)
	date_of_birth = models.DateField(null=True, blank=True)
	class Gender(models.TextChoices):
		SELECT = 'SELECT'
		MALE = 'MALE'
		FEMALE = 'FEMALE'
		UNSPECIFIED = 'PREFERRED NOT TO SAY'
	gender = models.CharField(choices=Gender.choices, default="Select", max_length=20)
	country = models.CharField(max_length=50,null=False,blank=False)
	state = models.CharField(max_length=50,null=False,blank=False)
	city = models.CharField(max_length=50,null=False,blank=False)
	created = models.DateTimeField(auto_now_add=True,auto_created=True)
	updated = models.DateTimeField(auto_now=True,auto_created=True)
	USERNAME_FIELD = 'email'
	REQUIRED_FIELDS = ['first_name','last_name','username']
    
	def __str__(self):
		return self.email
