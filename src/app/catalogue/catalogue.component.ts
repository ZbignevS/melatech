import { ChangeDetectorRef, Component } from '@angular/core';
import { IProduct } from './product.model';
import { ProductsService } from '../core/products.service';
import { BehaviorSubject, Observable } from 'rxjs';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
})
export class CatalogueComponent {
  loading$!: BehaviorSubject<boolean>;
  filteredProducts$!: Observable<IProduct[]>;

  constructor(
    private cdr: ChangeDetectorRef,
    private productService: ProductsService
  ) {
    this.loading$ = this.productService.loading$;
    this.filteredProducts$ = this.productService.filteredProducts$;

    this.productService.filteredProducts$.subscribe(() => {
      this.cdr.detectChanges();
    });
  }

  setFilter(newFilter: string) {
    this.productService.filterSubject.next(newFilter);
  }
}
