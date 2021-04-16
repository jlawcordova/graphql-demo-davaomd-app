import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DoctorProfilePageComponent } from './features/doctor-profile/doctor-profile-page/doctor-profile-page.component';

const routes: Routes = [
  {
    path: 'doctor-profile',
    component: DoctorProfilePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
