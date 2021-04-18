import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedHospitalComponent } from './affiliated-hospital.component';

describe('AffiliatedHospitalComponent', () => {
  let component: AffiliatedHospitalComponent;
  let fixture: ComponentFixture<AffiliatedHospitalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatedHospitalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedHospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
