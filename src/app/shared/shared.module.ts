import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    RatingsComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponent,
    RatingsComponent
  ]
})
export class SharedModule { }
