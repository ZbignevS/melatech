import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'bot-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SiteHeaderComponent {
  constructor() {}
}
