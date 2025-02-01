import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEcommerceComponent } from './Templates/home-ecommerce/home-ecommerce.component';
import { LandingComponent } from './Templates/landing/landing.component';
import { AboutUsComponent } from './Templates/about-us/about-us.component';
import { CartComponent } from './Templates/cart/cart.component';

const routes: Routes = [
  {path: 'shop' , component:HomeEcommerceComponent },
  {path: 'home' , component:LandingComponent},
  {path: 'about', component:AboutUsComponent},
  {path: 'cart', component:CartComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
