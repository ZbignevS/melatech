import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboEducationComponent } from './robo-education.component';

describe('RoboEducationComponent', () => {
  let component: RoboEducationComponent;
  let fixture: ComponentFixture<RoboEducationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboEducationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboEducationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
