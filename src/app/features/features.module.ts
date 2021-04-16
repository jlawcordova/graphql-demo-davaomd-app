import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DoctorProfileModule } from './doctor-profile/doctor-profile.module';
import { SharedModule } from '../shared/shared.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    DoctorProfileModule
  ]
})
export class FeaturesModule { }
