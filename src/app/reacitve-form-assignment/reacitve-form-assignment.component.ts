import { ValidatePassword } from './validatePassword.validator';
import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'reacitve-form-assignment',
  templateUrl: './reacitve-form-assignment.component.html',
  styleUrls: ['./reacitve-form-assignment.component.css']
})
export class ReacitveFormAssignmentComponent {
  form;
  constructor(fb : FormBuilder) { 
    this.form = fb.group({
      oldPassword: ['',[Validators.required],ValidatePassword.validateOldPassword]
    })
  }
  get oldPassword(){
    return this.form.get("oldPassword");
  }
}
