import { NgModule, Component } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeEcommerceComponent } from './Templates/home-ecommerce/home-ecommerce.component';
import { HeaderComponent } from './components/header/header.component';
import { FormsModule } from '@angular/forms';
import { ProductoComponent } from './components/producto/producto.component';
import { AboutUsComponent } from './Templates/about-us/about-us.component';
import { LandingComponent } from './Templates/landing/landing.component';
import { CartComponent } from './Templates/cart/cart.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeEcommerceComponent,
    HeaderComponent,
    ProductoComponent,
    AboutUsComponent,
    LandingComponent,
    CartComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
