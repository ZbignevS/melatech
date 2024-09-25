import { ChangeDetectionStrategy, Component } from '@angular/core';

import { MatButtonModule } from '@angular/material/button';

import { MatCardModule } from '@angular/material/card';
import { ROBOT_INFOS } from '../data/info';
import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';

@Component({
  selector: 'bot-robo-lesson',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './robo-lesson.component.html',
  styleUrl: './robo-lesson.component.css',
  animations: [
    trigger('fadeAnimation', [
      state('in', style({ opacity: 1 })),
      state('out', style({ opacity: 0 })),
      transition('in => out', [animate('0.5s ease-out')]),
      transition('out => in', [animate('0.5s ease-in')]),
    ]),
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RoboLessonComponent {
  info!: string;
  infos = ROBOT_INFOS;
  state = 'in';

  ngOnInit() {
    this.info = this.getRandomRobotFact();
  }

  generateInfo() {
    this.state = 'out';
    setTimeout(() => {
      this.info = this.getRandomRobotFact();
      this.state = 'in';
    }, 500);
  }

  private getRandomRobotFact(): string {
    const randomIndex = Math.floor(Math.random() * this.infos.length);
    return this.infos[randomIndex];
  }
}
