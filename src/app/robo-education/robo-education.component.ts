import { Component } from "@angular/core";
import { RoboLessonComponent } from "../robo-lesson/robo-lesson.component";
import { MatTabsModule } from "@angular/material/tabs";
import { RoboSingleRuleComponent } from "../robo-single-rule/robo-single-rule.component";
import { IRule, Rules } from "../data/rules";
import { CommonModule } from "@angular/common";
import { RoboQuizQuestionsComponent } from "../robo-quiz-questions/robo-quiz-questions.component";
import { VgCoreModule } from "@videogular/ngx-videogular/core";
import { VgControlsModule } from "@videogular/ngx-videogular/controls";
import { VgOverlayPlayModule } from "@videogular/ngx-videogular/overlay-play";
import { VgBufferingModule } from "@videogular/ngx-videogular/buffering";
import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";

@Component({
  selector: "bot-robo-education",
  standalone: true,
  imports: [
    CommonModule,
    RoboSingleRuleComponent,
    RoboLessonComponent,
    RoboQuizQuestionsComponent,
    MatTabsModule,
    VgCoreModule,
    VgControlsModule,
    VgOverlayPlayModule,
    VgBufferingModule,
    MatProgressSpinnerModule,
  ],
  templateUrl: "./robo-education.component.html",
  styleUrl: "./robo-education.component.css",
})
export class RoboEducationComponent {
  roboRulesList = Rules;
  startQuizClicked = false;

  onStartQuizClicked() {
    this.startQuizClicked = true;
  }
}
