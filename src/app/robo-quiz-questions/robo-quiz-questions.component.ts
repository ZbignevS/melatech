import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatRadioModule } from '@angular/material/radio';
import { Questions } from '../data/questions';
import { CountdownComponent } from 'ngx-countdown';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-robo-quiz-questions',
  standalone: true,
  imports: [
    MatCardModule,
    MatButtonModule,
    MatRadioModule,
    CountdownComponent,
    CommonModule,
  ],
  templateUrl: './robo-quiz-questions.component.html',
  styleUrl: './robo-quiz-questions.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoboQuizQuestionsComponent {
  questions: any = Questions;
  i: number = 0;
  question: any = this.questions[this.i];
  totalQuestions = Questions.length;
  answer: any;
  score: any = 0;

  onSelecting(value: any) {
    this.answer = value;
  }

  onPrev() {
    --this.i;
    this.question = this.questions[this.i];
  }

  onNext() {
    if (this.answer.value === this.question.answer) {
      ++this.score;
    }
    ++this.i;
    this.question = this.questions[this.i];
  }
}
