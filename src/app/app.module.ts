import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { CatalogueComponent } from "./catalogue/catalogue.component";
import { SiteHeaderComponent } from "./site-header/site-header.component";
import { ProductComponent } from "./catalogue/product/product.component";
import { RouterModule, Routes } from "@angular/router";
import { provideAnimationsAsync } from "@angular/platform-browser/animations/async";

import { MatProgressSpinnerModule } from "@angular/material/progress-spinner";
import { MatButtonModule } from "@angular/material/button";
import { MatChipsModule } from "@angular/material/chips";

const routes: Routes = [
  { path: "", component: HomeComponent },
  { path: "catalogue", component: CatalogueComponent },
  {
    path: "education",
    loadComponent: () =>
      import("./robo-education/robo-education.component").then(
        (mod) => mod.RoboEducationComponent
      ),
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CatalogueComponent,
    SiteHeaderComponent,
    ProductComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    MatButtonModule,
    MatChipsModule,
    RouterModule.forRoot(routes),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
