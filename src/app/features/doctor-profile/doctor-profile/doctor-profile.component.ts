import { Component, Input, OnInit } from '@angular/core';
import { Rating } from 'src/core/models/rating';

@Component({
  selector: 'app-doctor-profile',
  templateUrl: './doctor-profile.component.html',
  styleUrls: ['./doctor-profile.component.css']
})
export class DoctorProfileComponent implements OnInit {

  @Input()
  photo: string | undefined;

  @Input()
  name: string | undefined;

  @Input()
  specialty: string | undefined;

  @Input()
  rating: Rating | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
