import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingsComponent } from './components/ratings/ratings.component';
import { NavigationBarComponent } from './components/navigation-bar/navigation-bar.component';
import { SeparatorComponent } from './components/separator/separator.component';

@NgModule({
  declarations: [
    NavigationBarComponent,
    RatingsComponent,
    SeparatorComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NavigationBarComponent,
    RatingsComponent,
    SeparatorComponent
  ]
})
export class SharedModule { }
