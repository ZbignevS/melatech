import {
  NgModule,
  provideExperimentalZonelessChangeDetection,
} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { SiteHeaderComponent } from './site-header/site-header.component';
import { RouterModule, Routes } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'catalogue', component: CatalogueComponent },
  {
    path: 'education',
    loadComponent: () =>
      import('./robo-education/robo-education.component').then(
        (mod) => mod.RoboEducationComponent
      ),
  },
];

@NgModule({
  declarations: [AppComponent, SiteHeaderComponent],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [
    provideAnimationsAsync(),
    provideExperimentalZonelessChangeDetection(),
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
