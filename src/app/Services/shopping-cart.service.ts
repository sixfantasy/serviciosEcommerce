import { Injectable, signal, WritableSignal } from '@angular/core';

export interface SCart {
  products: Array<{ id: number; quantity: number; price: number }>;
}
@Injectable({
  providedIn: 'root',
})
export class ShoppingCartService {
  cart: SCart = { products: [] };
  countSignal: WritableSignal<number> = signal(this.cart.products.length);
  constructor() {}
  getCart(): SCart {
    return this.cart;
  }
  addProductToCart(id: number, precio?: number): void {
    const productIndex = this.cart.products.findIndex((p) => p.id === id);
    if (productIndex != -1) {
      this.cart.products[productIndex].quantity++;
    } else {
      this.cart.products.push({
        id: id,
        quantity: 1,
        price: precio ? precio : 0,
      });
    }
    this.countSignal.set(this.countProducts());
    console.log(this.countSignal());
  }
  removeProductFromCart(id: number): void {
    const productIndex = this.cart.products.findIndex((p) => p.id === id);
    if (productIndex != -1) {
      if (this.cart.products[productIndex].quantity > 1) {
        this.cart.products[productIndex].quantity--;
      } else {
        this.cart.products.splice(productIndex, 1);
      }
    } else {
      console.log('Product not found in cart');
    }
    this.countSignal.set(this.countProducts());
    console.log(this.countSignal());
  }
  calculateTotal() {
    let total = 0;
    this.cart.products.forEach((product) => {
      total += product.price * product.quantity;
    });
    return total;
  }
  countProducts() {
    let total = 0;
    this.cart.products.forEach((product) => (total += product.quantity));
    return total;
  }
  clearCart() {
    this.cart.products = [];
    this.countSignal.set(this.countProducts());
  }
}
