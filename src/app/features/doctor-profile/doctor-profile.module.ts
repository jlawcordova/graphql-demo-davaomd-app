import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfilePageComponent } from './doctor-profile-page/doctor-profile-page.component';
import { DoctorProfileComponent } from './doctor-profile/doctor-profile.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { AffiliatedHospitalsComponent } from './affiliated-hospitals/affiliated-hospitals.component';
import { AffiliatedHospitalComponent } from './affiliated-hospital/affiliated-hospital.component';

@NgModule({
  declarations: [
    DoctorProfilePageComponent,
    DoctorProfileComponent,
    AffiliatedHospitalsComponent,
    AffiliatedHospitalComponent
  ],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class DoctorProfileModule { }
