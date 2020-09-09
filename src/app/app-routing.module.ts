import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HospitalComponent} from './hospital/hospital.component'
import {PatientComponent} from './patient/patient.component'
import {LoginComponent} from './login/login.component'
import {RegisterComponent} from './register/register.component'
import {RecoverPasComponent} from './recover-pas/recover-pas.component'
import {ConfirmMailComponent} from './confirm-mail/confirm-mail.component'
import {LockScreenComponent} from './lock-screen/lock-screen.component'
import {AllDoctorsComponent} from './all-doctors/all-doctors.component'
import {MailComponent} from './mail/mail.component'
import {ChatComponent} from './chat/chat.component'
import {DoctorComponent} from './doctor/doctor.component'
import {AddDoctorComponent} from './add-doctor/add-doctor.component'
import {EditDoctorComponent} from './edit-doctor/edit-doctor.component'
import {GoogleMapsComponent} from './google-maps/google-maps.component'
import {ResultsComponent} from './results/results.component'
import {ChartsComponent} from './charts/charts.component'
const routes: Routes = [
    {path:'',component:HospitalComponent},
    {path:'introduction',component:HospitalComponent},
  //  {path:'',redirectTo:'/introduction',pathMatch:'full'},
    {path:'patiant',component:PatientComponent},
    {path:'login',component:LoginComponent},
    {path:'signup',component:RegisterComponent},
    {path:'recover',component:RecoverPasComponent},
    {path:'confirmMail',component:ConfirmMailComponent},
    {path:'LockScreen',component:LockScreenComponent},
    {path:'alldoctor',component:AllDoctorsComponent},
    {path:'mail',component:MailComponent},
    {path:'chat',component:ChatComponent},
    {path:'doctor',component:DoctorComponent},
    {path:'addDoctor',component:AddDoctorComponent},
    {path:'editDoctor',component:EditDoctorComponent},
    {path:'googleMap',component:GoogleMapsComponent},
    {path:'result',component:ResultsComponent},
    {path:'charts',component:ChartsComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
