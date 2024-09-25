import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';

// Component decorator - adds component metadata to a component class:
@Component({
  selector: 'bot-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})

//Define properties and methods to add data, functionality and business logic to component:
export class HomeComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
