import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/core/models/doctor';

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
    },
    schedule: [
      {
        hospital: {
          name: "San Pedro Hospital of Davao City, Inc.",
          location: "Guzman St, Poblacion District, Davao City, Davao del Sur"
        },
        building: "Medical Arts Building (MAB) – Rm 507",
        contactNumbers: [
          "0910-564-0665",
          "0910-564-0665"
        ],
        scheduleTime: [
          {
            weekDays: "Monday – Friday",
            startTime: "10:00am",
            endTime: "12:00pm"
          },
          {
            weekDays: "Saturday",
            startTime: "10:00am",
            endTime: "12:00pm"
          }
        ]
      }
    ]
      
  }

  constructor() { }

  ngOnInit(): void {
  }

}
