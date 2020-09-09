import { Component, OnInit } from '@angular/core';
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-add-doctor',
  templateUrl: './add-doctor.component.html',
  styleUrls: ['./add-doctor.component.scss']
})
export class AddDoctorComponent implements OnInit {
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
    password:new FormControl('',[Validators.required,Validators.pattern(/^[A-Z]/)])
  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
  }
  public roles=["patient"];
  constructor() { }

  ngOnInit() {
  }

}
