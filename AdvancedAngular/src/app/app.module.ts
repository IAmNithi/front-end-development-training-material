import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HeaderComponent } from './components/header/header.component';
import { SliderComponent } from './components/slider/slider.component';
import { LoginComponent } from './apps/login/login.component';
import { HomeComponent } from './apps/home/home.component';
import { DetailViewComponent } from './apps/detail-view/detail-view.component';
import { LoginCardComponent } from './components/login-card/login-card.component';
import { FacetedCarouselComponent } from './components/faceted-carousel/faceted-carousel.component';
import { FooterComponent } from './components/footer/footer.component';
import { DetailSectionComponent } from './components/detail-section/detail-section.component';
import { DataService } from './services/data.service';
const appRoutes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'details',
    component: DetailViewComponent
  },
  { path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SliderComponent,
    LoginComponent,
    HomeComponent,
    DetailViewComponent,
    LoginCardComponent,
    FacetedCarouselComponent,
    FooterComponent,
    DetailSectionComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    // other imports here
  BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
