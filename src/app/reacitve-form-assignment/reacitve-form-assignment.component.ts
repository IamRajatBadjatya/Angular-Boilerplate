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
  constructor(fb: FormBuilder) {
    this.form = fb.group({
      oldPassword: ['', [Validators.required], ValidatePassword.validateOldPassword],
      newPassword: ['', [Validators.required]],
      confirmPassword: ['', [Validators.required]]
    },{
      validator:ValidatePassword.validateConfirmPassword
    })
  }
  get oldPassword() {
    return this.form.get("oldPassword");
  }
   get newPassword() {
    return this.form.get("newPassword");
  }
   get confirmPassword() {
    return this.form.get("confirmPassword");
  }
}
