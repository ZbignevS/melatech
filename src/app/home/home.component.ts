import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomeComponent {}
