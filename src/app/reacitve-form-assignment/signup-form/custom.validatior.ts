
import { AbstractControl, ValidationErrors } from '@angular/forms';
export class CustomValidation {
    static cannotContainSpace(control: AbstractControl): ValidationErrors | null {
        if ((control.value as string).indexOf(" ") >= 0) {
            return { cantContainSpace: true }
        }
        return null;
    }
    static validateUserName(control: AbstractControl): Promise<ValidationErrors | null> {
        return new Promise((resolve,reject) => {
            setTimeout(() => {
                if (control.value === "rajat")
                    resolve({ checkUserName: true })
                else
                    resolve(null)
            }, 2000);
        });
    }
}