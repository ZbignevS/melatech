import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {}
