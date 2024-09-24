import { Component, Input } from "@angular/core";
import { IRule } from "../data/rules";
import { CommonModule } from "@angular/common";
import { MatCardModule } from "@angular/material/card";
import { MatExpansionModule } from "@angular/material/expansion";
import { RoboSingleRuleContentComponent } from "../robo-single-rule-content/robo-single-rule-content.component";

@Component({
  selector: "bot-robo-single-rule",
  standalone: true,
  imports: [
    CommonModule,
    MatCardModule,
    MatExpansionModule,
    RoboSingleRuleContentComponent,
  ],
  templateUrl: "./robo-single-rule.component.html",
  styleUrl: "./robo-single-rule.component.css",
})
export class RoboSingleRuleComponent {
  @Input() roboRule!: IRule;
  panelOpenState = false;
}
