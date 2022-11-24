//imported modules and components
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { HomeComponent } from './home/home.component';
import { ProductViewComponent } from './product-view/product-view.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';
import { AccountComponent } from './account/account.component';
import { OrdersComponent } from './account/orders/orders.component';
import { FavoritesComponent } from './account/favorites/favorites.component';
import { SignInComponent } from './firebasecomponents/sign-in/sign-in.component';
import { SignUpComponent } from './firebasecomponents/sign-up/sign-up.component';
import { DashboardComponent } from './firebasecomponents/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './firebasecomponents/forgot-password/forgot-password.component';
import { VerifyEmailComponent } from './firebasecomponents/verify-email/verify-email.component';
import { AuthGuard } from './shared/guard/auth.guard';
import { WelcomeComponent } from './account/welcome/welcome.component';

//Routes to be used in website
const routes: Routes = [
  
  { path: '', redirectTo: '/sign-in', pathMatch: 'full' },
  { path: 'sign-in', component: SignInComponent },
  { path: 'register-user', component: SignUpComponent },
  { path: 'forgot-password', component: ForgotPasswordComponent },
  { path: 'verify-email-address', component: VerifyEmailComponent },
  { path: "Home", component: HomeComponent },
  { path: "Shop", component: ShopComponent, canActivate: [AuthGuard] },
  { path: "About", component: AboutComponent },
  { path: "ShoppingCart", component: ShoppingCartComponent, canActivate: [AuthGuard] },
  { path: "ErrorPage", component: ErrorPageComponent },
  { path: "Shop/Product/:id", component: ProductViewComponent, canActivate: [AuthGuard] },
  { path: "Account", component: AccountComponent, canActivate: [AuthGuard],
  //child routes declared for Account route
   children: [
    {
      path: 'Welcome', component: WelcomeComponent,
    },
    {
      path:'Orders', component: OrdersComponent,
    },
    {
      path: 'Favorites', component: FavoritesComponent,
    },
    { 
      path: 'Info', component: DashboardComponent,
    },
  ]},
  { path: "**", component: ErrorNotFoundComponent }, //wildcard route for errorNotFound component
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }