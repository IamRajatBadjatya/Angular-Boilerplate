import { Component, OnInit } from '@angular/core';
interface IContactMethods {
  id: number;
  name: string
}
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  constructor() { }   
  contactMethods: IContactMethods[] = [{
    id: 1, name: "email"
  },
  {
    id: 2, name: "phone"

  }];
  log(ngModelAttr: any) {
    console.log("instance of formControlObject created inside ngModel", ngModelAttr);
  }

  checkLog(ngModelAttr: any): void {
    console.log("Instance of ngModel attribute that contains our formcontrol object", ngModelAttr);
  }
  onSubmit(f){
    console.log(f);
  }

}
