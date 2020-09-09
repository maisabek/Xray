import { Component, OnInit  , ElementRef ,ViewChild } from '@angular/core';
import *  as $ from "jquery";

@Component({
  selector: 'app-doctor',
  templateUrl: './doctor.component.html',
  styleUrls: ['./doctor.component.scss']
})
export class DoctorComponent implements OnInit {

  constructor(private elementRef:ElementRef){ }
public months=["February","March","April","May","June","July","August","Septemper","October","November","December"];

  ngOnInit() {
  }
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
}
