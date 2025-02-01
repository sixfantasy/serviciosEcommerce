import { Injectable } from '@angular/core';
export class Product {
  id: number = 0;
  nombre: string = '';
  descripcion: string = '';
  colores: string[] = [];
  precio: number = 0;
}

@Injectable({
  providedIn: 'root'
})
export class ProductosService{
  products : Product[] = [
    {id: 1, nombre:"MacBook Pro 2024", descripcion:"el ordenador para sobornar a la profe", colores: ["silver", "grey", "white"], precio: 300},
    {id: 2, nombre:"Imac de 2017", descripcion:"el modelo de Imac que representa a Apple", colores: ['grey'], precio: 200},
    {id: 3, nombre:"Iphone12", descripcion:"No hace galta tener el ultimo IPhone para llamar a tus amigos", colores: ["yellow", "blue","purple"], precio: 800}
  ]
  id = 3
  constructor() { }
  getProducts() {
   return this.products;
  }
  getProductById(id: number) {
    return this.products.find(product => product.id === id);
  }
  updateProducts(id:number, product:{nombre?:string, descripcion?:string, colores?:string[], precio?:number}){
    const index = this.products.findIndex(p => p.id == id);
    if(index !== -1){
      this.products[index] =
      {
        ...this.products[index],
        ...product
      }
    }
  }
  deleteProduct(id: number)
  {
    this.products = this.products.filter(product => product.id != id);
  }
  addProduct(product: {id: number, nombre: string, descripcion:string, colores:string[], precio: number })
  {
    product.id = this.id;
    this.products.push(product);
    this.id++;
  }

}
