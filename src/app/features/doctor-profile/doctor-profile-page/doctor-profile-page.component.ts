import { Component, OnInit } from '@angular/core';
import { Apollo, gql } from 'apollo-angular';
import { Subscription } from 'rxjs';
import { Doctor } from 'src/app/core/models/doctor.model';

const GET_DOCTOR = gql`
  query GetDoctor {
  doctor {
    name,
    specialty,
    photo,
    schedule {
      hospital {
        name,
        location
      },
      building,
      contactNumbers
      scheduleTime {
        weekDays,
        startTime,
        endTime
      }
    }
  }
}
`;

@Component({
  selector: 'app-doctor-profile-page',
  templateUrl: './doctor-profile-page.component.html',
  styleUrls: ['./doctor-profile-page.component.css']
})
export class DoctorProfilePageComponent implements OnInit {

  loading: boolean | undefined;

  doctor: Doctor = {
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
      },
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

  private querySubscription: Subscription | undefined;

  constructor(private apollo: Apollo) { }

  ngOnInit(): void {
    this.querySubscription = this.apollo.watchQuery<any>({
      query: GET_DOCTOR
    })
      .valueChanges
      .subscribe(({ data, loading }) => {
        this.loading = loading;
        this.doctor = data.doctor;
      });
  }

  ngOnDestroy() {
    this.querySubscription?.unsubscribe();
  }
}
