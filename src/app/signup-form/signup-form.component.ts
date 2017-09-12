import { CustomValidation } from './custom.validatior';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Component } from '@angular/core';

@Component({
  selector: 'signup-form',
  templateUrl: './signup-form.component.html',
  styleUrls: ['./signup-form.component.css']
})
export class SignupFormComponent {
  constructor() {

  }
  form = new FormGroup({
    username: new FormControl('', 
    [Validators.required, Validators.minLength(3),CustomValidation.cannotContainSpace],
    CustomValidation.validateUserName
    ),
    password: new FormControl('', [Validators.required, Validators.minLength(3)])
  });
  get username() {
    return this.form.get('username');
  }
  get password() {
    return this.form.get('password');
  }
}
