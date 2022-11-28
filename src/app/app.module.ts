//Imported Modules
import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { AccordionModule } from "primeng/accordion";
import { ShortenTextPipe } from './Services/shortenText.pipe';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { SweetAlert2Module } from '@sweetalert2/ngx-sweetalert2';
import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';
import { APP_BASE_HREF } from '@angular/common';

//Imported services and packages
import { ProductsService } from './Services/products.service';
import { ChosenItemsService } from './Services/chosenItems.service';
import { OrderedItems } from './Services/orderedItems.service';
import { FavoriteItemsService } from './Services/favoriteItems.service';
import { DetailsService } from './Services/details.service';
import { AuthService } from "./shared/services/auth.service";
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
import { AccountComponent } from './account/account.component';
import { SidebarComponent } from './account/sidebar/sidebar.component';
import { OrdersComponent } from './account/orders/orders.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { DashboardComponent } from './firebasecomponents/dashboard/dashboard.component';
import { SignInComponent } from './firebasecomponents/sign-in/sign-in.component';
import { SignUpComponent } from './firebasecomponents/sign-up/sign-up.component';
import { ForgotPasswordComponent } from './firebasecomponents/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './firebasecomponents/verify-email/verify-email.component';
import { WelcomeComponent } from './account/welcome/welcome.component';

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
    ErrorNotFoundComponent,
    AccountComponent,
    SidebarComponent,
    OrdersComponent,
    FavoritesComponent,
    DashboardComponent,
    SignInComponent,
    SignUpComponent,
    ForgotPasswordComponent,
    VerifyEmailComponent,
    WelcomeComponent,
    ShortenTextPipe,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AccordionModule,
    AppRoutingModule,
    FormsModule,
    SweetAlert2Module,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireAuthModule,
    AngularFirestoreModule,
    AngularFireStorageModule,
    AngularFireDatabaseModule,
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
  providers: [
    ProductsService,
    ChosenItemsService,
    OrderedItems,
    FavoriteItemsService,
    DetailsService,
    AuthService,
    { provide: APP_BASE_HREF, useValue: '/e-shopping-angular-app/' },
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