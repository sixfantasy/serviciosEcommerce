import { ShoppingCartService } from './../../Services/shopping-cart.service';
import { Component, computed, Signal } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  productsInCart: Signal<number>;
  constructor(private _shoppingCartService: ShoppingCartService){
    this.productsInCart = computed(() => _shoppingCartService.countSignal())
  }
}
