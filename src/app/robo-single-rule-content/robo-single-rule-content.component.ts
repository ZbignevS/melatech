import { Component, Input } from "@angular/core";

@Component({
  selector: "bot-robo-single-rule-content",
  standalone: true,
  imports: [],
  templateUrl: "./robo-single-rule-content.component.html",
  styleUrl: "./robo-single-rule-content.component.css",
})
export class RoboSingleRuleContentComponent {
  @Input() imgUrl!: string;
  @Input() description!: string;
}
