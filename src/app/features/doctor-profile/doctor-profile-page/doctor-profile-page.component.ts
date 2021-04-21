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
    rating {
      rating,
      count
    }
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

  loading: boolean = true;

  doctor: Doctor | undefined;

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
