import { ProductosService } from './../../Services/productos.service';
import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component } from '@angular/core';
import { SCart } from 'src/app/Services/shopping-cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css'],
})
export class CartComponent {
  cart: SCart;
  constructor(
    private _shoppingCartService: ShoppingCartService,
    private _productosService: ProductosService
  ) {
    this.cart = this._shoppingCartService.getCart();
  }
  getTitle(id: number): string {
    return this._productosService.getProductById(id)
      ? this._productosService.getProductById(id)!.nombre
      : 'Producto desconocido';
  }
  anadir(id: number) {
    this._shoppingCartService.addProductToCart(id);
  }
  eliminar(id: number) {
    this._shoppingCartService.removeProductFromCart(id);
  }
  calcularTotal() {
    return this._shoppingCartService.calculateTotal();
  }
  comprar(){
    this._shoppingCartService.clearCart();
    alert('Compra simulada')
  }
}
