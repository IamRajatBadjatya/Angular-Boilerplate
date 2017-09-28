import { ErrorHandler } from '@angular/core';
export class AppErrorHandler implements ErrorHandler {
    handleError(error : any){
        alert("Global ErrorHandler has been called");
        console.log(error);
    }
}