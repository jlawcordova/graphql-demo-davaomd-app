import { Component, Input, OnInit } from '@angular/core';
import { Schedule } from 'src/app/core/models/schedule';

@Component({
  selector: 'app-affiliated-hospitals',
  templateUrl: './affiliated-hospitals.component.html',
  styleUrls: ['./affiliated-hospitals.component.css']
})
export class AffiliatedHospitalsComponent implements OnInit {

  @Input()
  schedule: Schedule[] | undefined;

  constructor() { }

  ngOnInit(): void {
  }

}
