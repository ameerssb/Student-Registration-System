from django.db import models
from account.models import User,upload_location
from datetime import datetime
import re
# Create your models here.
class Session(models.Model):
    session = models.CharField(max_length=15,default="2022/2023")
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
          return self.session

class Program_Type(models.Model):
	name = models.CharField(max_length=20,unique=True)
	created = models.DateTimeField(auto_now_add=True,auto_created=True)
	updated = models.DateTimeField(auto_now=True,auto_created=True)

	def __str__(self):
		return self.name 

class Faculty(models.Model):
    program_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING, related_name='faculty_program_type')
    name = models.CharField(max_length=100,unique=True)
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
	    return self.name

class Subject(models.Model):
    program_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING, related_name='subject_program_type')
    name = models.CharField(max_length=100,unique=True)
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
	    return self.name    

class Course(models.Model):
    program_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING, related_name='course_program_type')
    faculty = models.ForeignKey(Faculty, on_delete=models.DO_NOTHING,blank=True,null=True)
    name = models.CharField(max_length=100,unique=True)
    combination = models.ManyToManyField(Subject, related_name='combination',blank=True) 
    others = models.ManyToManyField(Subject,related_name='others',blank=True) 
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
        return self.name

class Grade(models.Model):
    program_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING, related_name='grade_program_type')
    name = models.CharField(max_length=100,unique=True)
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
        return self.name  

class Status(models.Model):
    program_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING, related_name='status_program_type')
    name = models.CharField(max_length=100,unique=True)
    created = models.DateTimeField(auto_now_add=True,auto_created=True)
    updated = models.DateTimeField(auto_now=True,auto_created=True)

    def __str__(self):
        return self.name  

class Registration(models.Model):
    payment_reference = models.CharField(max_length=25,blank=True,default='0')
    class Payment_Status(models.TextChoices):
        unpaid = 'Unpaid'
        paid = 'Paid'
    payment_status = models.CharField(max_length=25,blank=True,choices=Payment_Status.choices, default="Unpaid")    
    user = models.ForeignKey(User, blank=True, null=True, on_delete=models.DO_NOTHING)
    status = models.ForeignKey(Status, blank=True, on_delete=models.DO_NOTHING, default=9)
    application_id = models.CharField(max_length=26,unique=True,primary_key=True)
    session = models.ForeignKey(Session, on_delete=models.DO_NOTHING,blank=True,null=True)

    p_type = models.ForeignKey(Program_Type, on_delete=models.DO_NOTHING,blank=True, null = True) 
    faculty = models.ForeignKey(Faculty, on_delete=models.DO_NOTHING,blank=True, null = True) 
    course = models.ForeignKey(Course, on_delete=models.DO_NOTHING,blank=True, null = True) 
    p_subject1 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='subject1')
    p_subject2 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='subject2')
    p_subject3 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='subject3')

    first_name = models.CharField(blank=True, null = True,  max_length=50)
    last_name = models.CharField(blank=True, null = True,  max_length=50)
    other_name = models.CharField(max_length=50,blank=True, null = True) 
    dob = models.DateField(blank=True, null = True)
    class Gender(models.TextChoices):
        select = 'Select'
        male = 'Male'
        Female = 'Female'
    gender = models.CharField(choices=Gender.choices, default="select", max_length=20)    
    class Marital(models.TextChoices):
        select = 'Select'
        single = 'Single'
        married = 'Married'
        divorced = 'Divorced'
    marital_status = models.CharField(choices=Marital.choices, default="select", max_length=20)
    class Disability(models.TextChoices):
        select = 'Select'
        no = 'No'
        yes = 'Yes'
    disability = models.CharField(choices=Disability.choices, default="select", max_length=20)    
    disability_type = models.CharField(max_length=100, blank=True, null = True) 
    state_of_origin = models.CharField(max_length=20,blank=True, null = True) 
    previous_ijmb_number = models.CharField(max_length=10,blank=True, null = True) 
    class Id_Type(models.TextChoices):
        select = 'Select'
        national_id = 'National ID'
        international_passport = 'International Passport'
    id_type = models.CharField(choices=Id_Type.choices, default="select", max_length=25)
    id_number = models.CharField(max_length=12,blank=True, null = True) 
    id_issued = models.DateField(blank=True, null = True) 
    id_expiry = models.DateField(blank=True, null = True) 
    email = models.EmailField(max_length=100, blank=True, null = True) 
    phone = models.CharField(max_length=14,blank=True, null = True) 
    address = models.CharField(max_length=250,blank=True, null = True) 
    postal = models.IntegerField(blank=True, null = True) 
    state = models.CharField(max_length=20,blank=True, null = True) 
    lga = models.CharField(max_length=30,blank=True, null = True) 


    next_of_kin_name = models.CharField(max_length=200,blank=True, null = True) 
    next_of_kin_email = models.EmailField(max_length=100,blank=True, null = True) 
    next_of_kin_phone = models.CharField(max_length=14,blank=True, null = True) 
    next_of_kin_address = models.CharField(max_length=250,blank=True, null = True) 
    class Relationship(models.TextChoices):
        Select = 'Select'
        parent = 'Sibling'
        sibling = 'Parent'
        uncle = 'Uncle'
        aunty = 'Aunty'
        other = 'Other'
    next_of_kin_relationship = models.CharField(choices=Relationship.choices, default="Select", max_length=20)
    next_of_kin_occupation = models.CharField(max_length=50,blank=True, null = True) 
    next_of_kin_occupation_address = models.CharField(max_length=250,blank=True, null = True)    


    file_photo_passport = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_identification = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_first_certificate = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_first_testimonial = models.FileField(upload_to=upload_location,blank=True, null = True)              
    file_second_certificate = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_second_testimonial = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_awaiting_exam_slip = models.FileField(upload_to=upload_location,blank=True, null = True) 
    file_scratch_card = models.FileField(upload_to=upload_location,blank=True, null = True)     

    post_type = models.CharField(max_length=30,blank=True,null=True,default="program")
    
    def __str__(self):
        return self.application_id
    
class Olevel(models.Model):
    registration = models.ForeignKey(Registration,on_delete=models.DO_NOTHING,blank=True, null=True)
    class OLevel_status(models.TextChoices):
        select = 'Select'
        one_sitting = 'One Sitting'
        two_sitting = 'Two Sitting'
    o_level_status = models.CharField(choices=OLevel_status.choices, default="Select", max_length=20)
    class Exam_Type(models.TextChoices):
        select = 'Select'
        waec = 'WAEC'
        neco = 'NECO'
        napteb = 'NAPTEB'
    examination_type = models.CharField(choices=Exam_Type.choices, default="Select", max_length=20)
    examination_center = models.CharField(max_length=200,blank=True, null = True)     
    examination_number = models.CharField(max_length=15,blank=True, null = True) 
    examination_year = models.CharField(max_length=4,blank=True, null = True)
    subject1 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject1')
    subject2 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject2')
    subject3 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject3')
    subject4 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject4')
    subject5 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject5')
    subject6 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject6')
    subject7 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject7')
    subject8 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject8')
    subject9 = models.ForeignKey(Subject, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_subject9')
    grade1 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade1')
    grade2 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade2')
    grade3 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade3')
    grade4 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade4')
    grade5 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade5')
    grade6 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade6')
    grade7 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade7')
    grade8 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade8')
    grade9 = models.ForeignKey(Grade, on_delete=models.DO_NOTHING,blank=True, null = True, related_name='exam_grade9')

    def __str__(self):
        return str(self.o_level_status) 

class Upload(models.Model):
    file1 = models.FileField(upload_to='upload/',)
    file2 = models.FileField(upload_to='upload/')