import { Component, OnInit  , ElementRef } from '@angular/core';
import *  as $ from "jquery";
import {FormControl,FormGroup,Validators} from '@angular/forms';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {
  contactsForm=new FormGroup({
    userEmail:new FormControl('',[Validators.required,Validators.email]),
  });
  messageContainer:any[]=[];
saveform(){
   let message={
     email:this.contactsForm.controls.userEmail.value,
     password:this.contactsForm.controls.password.value,
   }
  this.messageContainer.push(message);
}
  constructor(private elementRef:ElementRef) { }
  ngOnInit() {}
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
//import *  as $ from "jquery";
}
