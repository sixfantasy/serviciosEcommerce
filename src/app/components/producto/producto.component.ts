import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css'],
})
export class ProductoComponent {
  @Input() producto?: Product;
  colorClass: string = 'greenClass';
  constructor(private _shoppingCartService: ShoppingCartService) {}

  colorswitch = setInterval(() => {
    this.colorClass =
      this.colorClass === 'greenClass' ? 'whiteClass' : 'greenClass';
  }, 1000);
  addProductToCart(){
    this._shoppingCartService.addProductToCart(this.producto!.id, this.producto!.precio);
  }
}
