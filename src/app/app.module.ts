import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselModule } from 'ngx-owl-carousel-o';

import { AppComponent } from './app.component';
import { NavbarComponent } from './Home/navbar/navbar.component';
import { FooterComponent } from './Home/footer/footer.component';

import { TestimonialsComponent } from './Home/testimonials/testimonials.component';
import { ProgramComponent } from './Home/program/program.component';
import { AboutComponent } from './Home/about/about.component';
import { GallaryComponent } from './Home/gallary/gallary.component';
import { SliderComponent } from './Home/slider/slider.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    TestimonialsComponent,
    ProgramComponent,
    AboutComponent,
    GallaryComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    CarouselModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
