import { Component, OnInit  , ElementRef ,ViewChild } from '@angular/core';
import *  as $ from "jquery";
@Component({
  selector: 'app-hospital',
  templateUrl: './hospital.component.html',
  styleUrls: ['./hospital.component.scss']
})
export class HospitalComponent implements OnInit {
  constructor(private elementRef:ElementRef) { }
  ngOnInit() {}
  ngAfterViewInit(){
    var jquery=document.createElement('script');
    jquery.type='text/javascript';
    jquery.src='./assets/js/custom.js';
    this.elementRef.nativeElement.appendChild(jquery);
  }
  
}
