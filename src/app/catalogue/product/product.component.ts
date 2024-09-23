import { Component, Input } from '@angular/core';
import { IProduct } from '../product.model';

@Component({
  selector: 'bot-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
})
export class ProductComponent {
  @Input() data!: IProduct;

  getImageUrl(product: IProduct) {
    return `assets/images/robot-parts/${product.imageName}`;
  }

  getDiscountedClasses(product: IProduct) {
    return product.discount > 0 ? 'discounted' : '';
  }

  addToCart(product: IProduct) {
    console.log('Product added to cart:', product);
  }
}
