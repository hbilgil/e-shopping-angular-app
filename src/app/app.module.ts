import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { ContainerComponent } from './container/container.component';
import { HomeComponent } from './home/home.component';
import { HomeDiv1Component } from './home-div1/home-div1.component';
import { HomeDiv2Component } from './home-div2/home-div2.component';
import { ShopComponent } from './shop/shop.component';
import { AboutComponent } from './about/about.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { CategoriesComponent } from './categories/categories.component';
import { CardComponent } from './card/card.component';
import { AboutDiv1Component } from './about-div1/about-div1.component';
import { AboutDiv2Component } from './about-div2/about-div2.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ProductViewComponent } from './product-view/product-view.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    ContainerComponent,
    HomeComponent,
    HomeDiv1Component,
    HomeDiv2Component,
    ShopComponent,
    AboutComponent,
    ShoppingCartComponent,
    CategoriesComponent,
    CardComponent,
    AboutDiv1Component,
    AboutDiv2Component,
    ErrorPageComponent,
    ProductViewComponent
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
