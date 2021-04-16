import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/core/models/doctor';
import { Rating } from 'src/core/models/rating';

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit {

  doctor : Doctor = {
    name: "Felicia Lao, MD",
    specialty: "Internal Medicine",
    photo: "https://randomuser.me/api/portraits/women/51.jpg",
    rating: {
      rating: 4.5,
      count: 112
    }
  }

  constructor() { }

  ngOnInit(): void {
  }

}
