import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboQuizQuestionsComponent } from './robo-quiz-questions.component';

describe('RoboQuizQuestionsComponent', () => {
  let component: RoboQuizQuestionsComponent;
  let fixture: ComponentFixture<RoboQuizQuestionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboQuizQuestionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboQuizQuestionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
