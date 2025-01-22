import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeEcommerceComponent } from './Templates/home-ecommerce/home-ecommerce.component';

const routes: Routes = [
  {path: 'home-ecommerce' , component:HomeEcommerceComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
