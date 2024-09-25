import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboSingleRuleComponent } from './robo-single-rule.component';

describe('RoboSingleRuleComponent', () => {
  let component: RoboSingleRuleComponent;
  let fixture: ComponentFixture<RoboSingleRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboSingleRuleComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboSingleRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
