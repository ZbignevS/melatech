import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboRulesComponent } from './robo-rules.component';

describe('RoboRulesComponent', () => {
  let component: RoboRulesComponent;
  let fixture: ComponentFixture<RoboRulesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboRulesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboRulesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
