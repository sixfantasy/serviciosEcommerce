import { Component, OnInit } from '@angular/core';
import { Product, ProductosService } from 'src/app/Services/productos.service';

@Component({
  selector: 'app-home-ecommerce',
  templateUrl: './home-ecommerce.component.html',
  styleUrls: ['./home-ecommerce.component.css'],
})
export class HomeEcommerceComponent implements OnInit {
  products: Product[] = [];
  selectedoption: number = 0;
  nombreForm: string = '';
  descForm: string = '';
  precioForm: number = 0;
  coloresForm: string = '';
  constructor(private productService: ProductosService) { }

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }
  actualizarProducto() {
    let producto = { nombre: this.nombreForm ? this.nombreForm : undefined,
      descripcion: this.descForm ? this.descForm : undefined,
      colores: this.coloresForm ? this.coloresForm.split(',') : undefined,
      precio: this.precioForm ? this.precioForm : undefined,
    }
    let Keys = Object.keys(producto) as Array<keyof typeof producto>;
    Keys.forEach((key) => {if(producto[key] == undefined) {delete producto[key]}})
      console.log(producto);

    this.productService.updateProducts(this.selectedoption, producto);
    this.products = this.productService.getProducts();
      this.nombreForm = '';
      this.descForm = '';
      this.precioForm = 0;
      this.coloresForm = '';
  }
  crearProducto() {
    if (
      this.nombreForm &&
      this.descForm &&
      this.precioForm &&
      this.coloresForm
    ) {
      this.productService.addProduct({
        id: 0,
        nombre: this.nombreForm,
        descripcion: this.descForm,
        colores: this.coloresForm.split(','),
        precio: this.precioForm,
      });
      this.nombreForm = '';
      this.descForm = '';
      this.precioForm = 0;
      this.coloresForm = '';
      alert('Crear Enviado');
    }
    else
     alert('Faltan datos');
    this.products = this.productService.getProducts();

  }
  eliminarProducto() {
    this.productService.deleteProduct(this.selectedoption);
    this.products = this.productService.getProducts();
  }
}

