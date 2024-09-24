import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RoboSingleRuleContentComponent } from './robo-single-rule-content.component';

describe('RoboSingleRuleContentComponent', () => {
  let component: RoboSingleRuleContentComponent;
  let fixture: ComponentFixture<RoboSingleRuleContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RoboSingleRuleContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RoboSingleRuleContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
