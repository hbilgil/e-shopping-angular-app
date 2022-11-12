import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ErrorNotFoundComponent } from './error-not-found/error-not-found.component';
import { HomeComponent } from './home/home.component';
import { ShopComponent } from './shop/shop.component';
import { ShoppingCartComponent } from './shopping-cart/shopping-cart.component';

const routes: Routes = [
  {path: "", redirectTo:"Home", pathMatch:"full"},
  {path: "Home", component: HomeComponent},
  {path: "Shop", component: ShopComponent},
  {path: "About", component: AboutComponent},
  {path: "ShoppingCart", component: ShoppingCartComponent},
  {path: "**", component: ErrorNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
