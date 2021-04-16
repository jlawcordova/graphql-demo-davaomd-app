import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfilePageComponent } from './doctor-profile-page/doctor-profile-page.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  declarations: [
    DoctorProfilePageComponent,
    DoctorProfileComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DoctorProfileModule { }
