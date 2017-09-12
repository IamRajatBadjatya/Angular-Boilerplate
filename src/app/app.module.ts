import { SignupFormComponent } from './signup-form/signup-form.component';
import { FormValidationModule } from './form-validation/form-validation.module';
import { TestService } from './testService.service';
import {FormsModule,ReactiveFormsModule} from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {CoursesComponent} from './courses.component';
import { AppComponent } from './app.component';
import { CustomPipe} from './customPipe.pipe';
import { FavoriteComponent } from './favorite/favorite.component';
import { BootstrapPanelComponent } from './bootstrap-panel/bootstrap-panel.component';
import { LikeComponentComponent } from './like-component/like-component.component';
import { InputFormatDirective } from './input-format.directive';
import { FormArrayComponent } from './form-array/form-array.component';
import { ReacitveFormAssignmentComponent } from './reacitve-form-assignment/reacitve-form-assignment.component';
@NgModule({
  declarations: [
    AppComponent,CoursesComponent,CustomPipe, FavoriteComponent, BootstrapPanelComponent,
     LikeComponentComponent, InputFormatDirective, SignupFormComponent, FormArrayComponent, ReacitveFormAssignmentComponent
  ],
  imports: [
    BrowserModule,FormsModule,FormValidationModule, ReactiveFormsModule


  ],
  providers: [TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
