import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

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
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
