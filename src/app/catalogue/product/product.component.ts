import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { IProduct } from '../product.model';
import { MatButtonModule } from '@angular/material/button';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'bot-product',
  templateUrl: './product.component.html',
  styleUrl: './product.component.css',
  standalone: true,
  imports: [CommonModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
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
