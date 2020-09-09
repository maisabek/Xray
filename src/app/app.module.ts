import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HospitalComponent } from './hospital/hospital.component';
import { DoctorComponent } from './doctor/doctor.component';
import { FooterComponent } from './footer/footer.component';
import { LockScreenComponent } from './lock-screen/lock-screen.component';
import { NavbarComponent } from './navbar/navbar.component';
import { PatientComponent } from './patient/patient.component';
import { RecoverPasComponent } from './recover-pas/recover-pas.component';
import { ConfirmMailComponent } from './confirm-mail/confirm-mail.component';
import {ReactiveFormsModule} from '@angular/forms';
import { AllDoctorsComponent } from './all-doctors/all-doctors.component';
import { MailComponent } from './mail/mail.component';
import { ChatComponent } from './chat/chat.component';
import { AddDoctorComponent } from './add-doctor/add-doctor.component';
import { EditDoctorComponent } from './edit-doctor/edit-doctor.component';
import { ResultsComponent } from './results/results.component';
import { GoogleMapsComponent } from './google-maps/google-maps.component';
import { ChartsComponent } from './charts/charts.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent,
    DashboardComponent,
    HospitalComponent,
    DoctorComponent,
    FooterComponent,
    LockScreenComponent,
    NavbarComponent,
    PatientComponent,
    RecoverPasComponent,
    ConfirmMailComponent,
    AllDoctorsComponent,
    MailComponent,
    ChatComponent,
    AddDoctorComponent,
    EditDoctorComponent,
    ResultsComponent,
    GoogleMapsComponent,
    ChartsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
