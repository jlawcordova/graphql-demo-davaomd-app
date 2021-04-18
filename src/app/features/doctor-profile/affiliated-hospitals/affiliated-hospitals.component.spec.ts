import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AffiliatedHospitalsComponent } from './affiliated-hospitals.component';

describe('AffiliatedHospitalsComponent', () => {
  let component: AffiliatedHospitalsComponent;
  let fixture: ComponentFixture<AffiliatedHospitalsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AffiliatedHospitalsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AffiliatedHospitalsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
