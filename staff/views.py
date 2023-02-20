from django.shortcuts import render,HttpResponse,redirect,get_object_or_404
from django.views import View
from program.models import Session,Registration,Olevel
from .forms import SummaryDoneForm,SummaryProgramForm,SummaryPersonalForm,SummaryNextOfKinForm,SummaryRequiremtForm,SummaryEducationForm
from django.contrib.auth.decorators import login_required
from django.utils.decorators import method_decorator
from .decorators import user_sigin
from account.models import User
from .models import Staff
# Create your views here.

signout_deco = [login_required]
sigin_reg_deco = [user_sigin(User,'Staff_Home')]

@method_decorator(login_required,name="get")
class Home(View):
    session_ = Session.objects.first()
    def get(self,request):
        staff = User.objects.get(email=request.user)
        if staff.is_superuser:
            data = Registration.objects.filter(session=self.session_,)            
        else:
            staff = Staff.objects.get(user=request.user)
            data = Registration.objects.filter(session=self.session_,payment='Paid',course=staff.department)
        context = {'data':data,'session': self.session_}
        return render(request, 'staff/index.html', context)

@method_decorator(login_required,name="get")
class Summary(View):
    session_ = Session.objects.first()
    def get(self,request,id):
        data = Registration.objects.filter(application_id=id)
        one = Olevel.objects.filter(registration=data[0],o_level_status='One Sitting')
        two = Olevel.objects.filter(registration=data[0],o_level_status='Two Sitting')
        if str(data[0].status) != 'Ongoing Application' or request.user.is_superuser == True:
            program  = SummaryProgramForm(instance=data.first())
            personal = SummaryPersonalForm(instance=data.first())
            education1 = SummaryEducationForm(instance=one.first())
            education2 = SummaryEducationForm(instance=two.first())       
            nextofkin = SummaryNextOfKinForm(instance=data.first())
            requirement = SummaryRequiremtForm(instance=data.first())
            done = SummaryDoneForm(instance=data.first())            
            context = {
                'status': str(data[0].status),
                'session':self.session_,
                'program':program,
                'personal':personal,
                'education1':education1,
                'education2':education2,
                'nextofkin':nextofkin,
                'requirement':requirement,
                'done':done,
            }
            return render(request, 'staff/summary.html', context)

    def post(self,request,id):
        data = Registration.objects.filter(application_id=id)
        form = SummaryDoneForm(request.POST, instance=data.first())
        if form.is_valid():
            form.save()
            return redirect('Staff_Home')
        else:
            return redirect('Staff_Summary',id=id)
