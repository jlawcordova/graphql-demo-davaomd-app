import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/core/models/schedule.model';

@Component({
  selector: 'app-affiliated-hospital',
  templateUrl: './affiliated-hospital.component.html',
  styleUrls: ['./affiliated-hospital.component.css']
})
export class AffiliatedHospitalComponent implements OnInit {

  @Input()
  schedule: Schedule | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
