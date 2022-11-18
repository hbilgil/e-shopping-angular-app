//Imported Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';

//Imported services and packages
import { ProductsService } from './Services/products.service';
import { ChosenItemsService } from './Services/chosenItems.service';
import { defineElement } from 'lord-icon-element';
import lottie from 'lottie-web';

//Imported Components
import { AppComponent } from './app.component';
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
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';

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
    ProductViewComponent,
    ErrorNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ProductsService,
    ChosenItemsService,
  ],
  bootstrap: [
    AppComponent
  ]
})

export class AppModule { 
  constructor() {
    defineElement(lottie.loadAnimation); //animated icons
  }
}