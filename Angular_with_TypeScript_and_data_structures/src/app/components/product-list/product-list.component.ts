import { Component } from '@angular/core';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  product: string[] = ['Snacks'];
  newProduct: string = '';

  addProduct() {
    if (this.newProduct.trim()) {
      this.product.push(this.newProduct);
      this.newProduct = '';
    }
  }

  deleteProduct(product: string) {
    this.product = this.product.filter(p => p !== product);
  }
}
