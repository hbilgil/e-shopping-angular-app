import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { HomeDiv1Component } from './home-div1/home-div1.component';
import { HomeDiv2Component } from './home-div2/home-div2.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    HomeComponent,
    HomeDiv1Component,
    HomeDiv2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor() {
    defineElement(lottie.loadAnimation);
  }
}
