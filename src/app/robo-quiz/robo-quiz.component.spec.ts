import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboQuizComponent } from './robo-quiz.component';

describe('RoboQuizComponent', () => {
  let component: RoboQuizComponent;
  let fixture: ComponentFixture<RoboQuizComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboQuizComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboQuizComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
