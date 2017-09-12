import { AbstractControl, ValidationErrors } from '@angular/forms';
export class ValidatePassword{
  static validateOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
      return new Promise(
          (resolve,reject) => {
              setTimeout(()=>{
                  if(control.value === "rajat")
                  resolve({invalidPassword : true})
                  else
                   resolve(null) 
              },2000)
          }
      );
  }
}