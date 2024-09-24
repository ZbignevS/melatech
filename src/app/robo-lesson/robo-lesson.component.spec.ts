import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboLessonComponent } from './robo-lesson.component';

describe('RoboLessonComponent', () => {
  let component: RoboLessonComponent;
  let fixture: ComponentFixture<RoboLessonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboLessonComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboLessonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
