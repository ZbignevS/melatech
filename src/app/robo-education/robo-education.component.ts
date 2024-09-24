import { Component } from "@angular/core";
import { RoboLessonComponent } from "../robo-lesson/robo-lesson.component";
import { RoboQuizComponent } from "../robo-quiz/robo-quiz.component";
import { RoboRulesComponent } from "../robo-rules/robo-rules.component";
import { MatTabsModule } from "@angular/material/tabs";

@Component({
  selector: "bot-robo-education",
  standalone: true,
  imports: [
    RoboRulesComponent,
    RoboLessonComponent,
    RoboQuizComponent,
    MatTabsModule,
  ],
  templateUrl: "./robo-education.component.html",
  styleUrl: "./robo-education.component.css",
})
export class RoboEducationComponent {}
