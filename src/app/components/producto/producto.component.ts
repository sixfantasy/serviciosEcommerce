import { Component, Input } from '@angular/core';
import { Product } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent {
 @Input() producto?: Product;
}
