import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }
  checkLog(ngModelAttr: any): void {
    console.log("Instance of ngModel attribute that contains our formcontrol object", ngModelAttr);
  }
  onSubmit(f){
    console.log(f);
  }

}
