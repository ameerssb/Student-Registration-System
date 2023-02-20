from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from django.http import JsonResponse
import json
import re
from django.views import View
from account.forms import *
from account.models import *
from .forms import ApplicationCreationForm,ProgramForm,PersonalForm,NextOfKinForm,RequiremtForm,EducationForm,DoneForm
from .forms import SummaryProgramForm,SummaryPersonalForm,SummaryNextOfKinForm,SummaryRequiremtForm,SummaryEducationForm
from django.contrib.auth.decorators import login_required
from django.views.decorators.csrf import csrf_protect,csrf_exempt
from django.utils.decorators import method_decorator
from account.decorators import email_verification_required,active_verification_required,user_sigin,verification_required
from django.contrib import messages
from account.models import User
from .models import Session,Program_Type,Course,Faculty,Subject,Registration,Olevel,Status
from datetime import date,datetime
from paystackapi.paystack import Paystack
import os
from django.utils import timezone

paystack_secret_key = str(os.environ.get('PAYSTACK'))
paystack = Paystack(secret_key=paystack_secret_key)
# Create your views here.

signout_deco = [login_required]
#sigin_reg_deco = [user_sigin(User,'Ijmb_Home')]

def Payment(email):
    amount = 250000
#    e = 'sanisbature17@gmail.com'
    payment = paystack.transaction.initialize(email=email,amount=amount)
    return payment

def checkout(reference):
    try:
        status = paystack.transaction.verify(reference)
    except:
        status = {'status': False, 'data':{'status': 'failed'}}

    if status['status'] == True:
        if status['data']['status'] == 'success':
            return 'success'
        else:
            return 'unpaid'
    else:
        return 'failed'

def checkuser(data,count):
    for i in range(count):
        check = checkout(data[i].reference_number)
        if check == 'success':
            update = Registration.objects.get(application_id=data[i].application_id)
            update.payment = 'Paid'
            update.save()
        else:
            if data[i].status != 'Unpaid':
                update = Registration.objects.get(application_id=data[i].application_id)
                update.payment = 'Unpaid'
                update.save()      

@method_decorator(login_required,name="get")
@method_decorator(login_required,name="post")
class Home(View):
    def get(self,request):
        data = Registration.objects.filter(user=request.user.pk,).all().order_by('session')
        checkuser(data,data.count())
        data = Registration.objects.filter(user=request.user.pk,).all().order_by('session')        
        context = {'data':data,}

        return render(request, 'program/index.html', context)

    def post(self,request):
        if request.POST['stat']:
            id = request.POST['stat']
            data = Registration.objects.filter(application_id=id)[0]  
            if str(data.status) == 'Widthdraw':
                data = Registration.objects.filter(application_id=id).update(status=9)
                return redirect('Ijmb_Register')
            elif str(data.status) == 'Ongoing Application':
                print(data.status)         
                return redirect('Ijmb_Register')
            else:
                return redirect('Ijmb_Home')                

@method_decorator(login_required,name="get")
class Summary(View):
    session_ = Session.objects.first()
    def get(self,request,id):
        data = Registration.objects.filter(application_id=id)
        one = Olevel.objects.filter(registration=data[0],o_level_status='One Sitting')
        two = Olevel.objects.filter(registration=data[0],o_level_status='Two Sitting')
        if str(data[0].status) == 'Submitted':
            program  = SummaryProgramForm(instance=data.first())
            personal = SummaryPersonalForm(instance=data.first())
            education1 = SummaryEducationForm(instance=one.first())
            education2 = SummaryEducationForm(instance=two.first())       
            nextofkin = SummaryNextOfKinForm(instance=data.first())
            requirement = SummaryRequiremtForm(instance=data.first())
            context = {
                'session':self.session_,
                'program':program,
                'personal':personal,
                'education1':education1,
                'education2':education2,
                'nextofkin':nextofkin,
                'requirement':requirement,
            }
            return render(request, 'program/summary.html', context)

@method_decorator(login_required,name="get")
class Pre(View):
    def get(self,request):
        if request.method == 'GET':
            other = []        
            filt = ''
            if request.GET.get('program_session'):
                filt = Program_Type.objects.all().order_by('-created').values('name','id')
            elif request.GET.get('program_type'):
                req = request.GET.get('program_type')
                program_type = Program_Type.objects.filter(id=req)
                filt = Faculty.objects.filter(program_type__in=program_type).order_by('-created').values('name','id')
            elif request.GET.get('program_faculty'):
                req = request.GET.get('program_faculty')
                faculty = Faculty.objects.filter(id=req)
                filt = Course.objects.filter(faculty__in=faculty).order_by('-created').values('name','id')
            elif request.GET.get('program_course'):
                req = request.GET.get('program_course')
                filt = Course.objects.get(id=req).combination.all().values('name','id')
                if filt.count() < 3:
                    other = Course.objects.get(id=req).others.all().values('name','id')
                    if other.count() == 0:
                        other = Subject.objects.all().values('name','id')
            data = {'filt':list(filt),'other':list(other)}
            return JsonResponse(data)

@method_decorator(login_required,name="post")
@method_decorator(login_required,name="get")
class Register(View):
    session_ = Session.objects.first()
    def get(self,request):
        data = Registration.objects.filter(user=request.user.pk,session=self.session_)
        one = ''
        two = ''
        if data.count() > 0:
            one = Olevel.objects.filter(registration=data[0],o_level_status='One Sitting')
            two = Olevel.objects.filter(registration=data[0],o_level_status='Two Sitting')
        if data.count() == 0:
            s = str(datetime.now())
            s = re.sub(r'[^0-9]','',s)
            application_id = s + str(request.user.pk)
            Registration.objects.create(user=request.user,session=self.session_,application_id=application_id)
            return redirect('Ijmb_Register')
        if str(data[0].status) == 'Ongoing Application':
            program  = ProgramForm(instance=data.first())
            personal = PersonalForm(instance=data.first())
            education1 = EducationForm(instance=one[0])
            education2 = EducationForm(instance=two[0])       
            nextofkin = NextOfKinForm(instance=data.first())
            requirement = RequiremtForm(instance=data.first())
            context = {
                'session':self.session_,
                'program':program,
                'personal':personal,
                'education1':education1,
                'education2':education2,
                'nextofkin':nextofkin,
                'requirement':requirement,
            }
            return render(request, 'program/program_reg.html', context)
        else:
            messages.error(request,'Registration can be only submitted once in a session. For any alteration contact admission team at admission@yumsukijmb.edu.ng')
            return redirect('Ijmb_Home')

    def post(self,request):
        data = Registration.objects.filter(user=request.user.pk,session=self.session_)
        if request.POST['post_type'] == 'program':
            form  = ProgramForm(request.POST,instance=data.first())
            data = submit_to(form,'Program')
            return JsonResponse(data)
        if request.POST['post_type'] == 'personal':
            form  = PersonalForm(request.POST,instance=data.first())
            data = submit_to(form,'Personal')
            return JsonResponse(data)
        if request.POST['post_type'] == 'next_of_kin':
            form  = NextOfKinForm(request.POST,instance=data.first())
            data = submit_to(form,'Next_Of_Kin')
            return JsonResponse(data)
        if request.POST['post_type'] == 'requirement':
            form  = RequiremtForm(request.POST, request.FILES or None, instance=data.first())
            data = submit_to(form,'Requirement')
            return JsonResponse(data)
        if request.POST['post_type'] == 'o_level_1':
            one = Olevel.objects.filter(registration=data[0],o_level_status='One Sitting')
            if one.count() > 0:
                form  = EducationForm(request.POST,instance=one[0])
            else:
                form  = EducationForm(request.POST)
            if form.is_valid():
                d = form.save(commit=False)
                d.o_level_status = 'One Sitting'
                d.registration = data[0]
                d.save()
                m =  "O Level Exam 1 Data Successfully Added"
                data = {'message':m}
                return JsonResponse(data,status=200)                
            else:
                m = " O Level Exam 1 Registration form is not filled correctly"
                data = {'message':m,}
                return JsonResponse(data,status=500)
        if request.POST['post_type'] == 'o_level_2':
            one = Olevel.objects.filter(registration=data[0],o_level_status='Two Sitting')
            if one.count() > 0:
                form  = EducationForm(request.POST,instance=one[0])
                if form.is_valid():
                    form.save()
                    data[0].post_type = "o_level_1"
                    data[0].save()
                    return JsonResponse(data,status=200)                    
            else:
                form  = EducationForm(request.POST)
                if form.is_valid():
                    d = form.save(commit=False)
                    d.o_level_status = 'Two Sitting'                    
                    d.registration = data[0]
                    d.save()                
                    data[0].post_type = "o_level_2"
                    data[0].save()
                    m =  "O Level Exam 2 Data Successfully Added"
                    data = {'message':m}
                    return JsonResponse(data,status=200)                    
                else:
                    m = " O Level Exam 2 Registration form is not filled correctly"
                    data = {'message':m,}
                    return JsonResponse(data,status=500)
        if request.POST['post_type'] == 'widthdraw':
            form  = DoneForm(request.POST, instance=data.first())
            if form.is_valid():
                form.save()
                data = {'message':'Successful',}
                return JsonResponse(data,status=200)
            else:
                data = {'message':'not valid',}
                return JsonResponse(data,status=500)
        if request.POST['post_type'] == 'submit':
            form  = DoneForm(request.POST, instance=data.first())
            if form.is_valid():
                form = form.save(commit=False)
                payment = Payment(str(request.user.email))
                if payment['status'] == False:
                    data = {'message':'Failed',}
                    return JsonResponse(data,status=500)
                else:
                    data = data[0]
                    data.reference_number = payment['data']['reference']
                    data.reference_url = payment['data']['authorization_url']
                    data.submitted = timezone.now()
                    data.status = Status.objects.get(id=2)
                    data.save()
                    data = {'message':'Successful',}
                    return JsonResponse(data,status=200)
            else:
                data = {'message':'not valid',}
                return JsonResponse(data,status=500)            

def submit_to(form,mes):
    print(form.errors)
    if form.is_valid():
        data = form.save(commit=False)
        data.post_type = mes.lower()
        data.save()
        m =  mes + " Data Successfully Added"
        data = {'message':m}
        return data            
    else:
        m = mes + " Registration form is not filled correctly"
        data = {'message':m,}
        return data            
