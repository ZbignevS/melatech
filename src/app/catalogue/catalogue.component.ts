import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  OnDestroy,
} from '@angular/core';
import { IProduct } from './product.model';
import { ProductsService } from '../core/products.service';
import { BehaviorSubject, Observable, Subscription } from 'rxjs';
import { MatChipsModule } from '@angular/material/chips';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { ProductComponent } from './product/product.component';
import { AsyncPipe, CommonModule } from '@angular/common';

@Component({
  selector: 'bot-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css'],
  standalone: true,
  imports: [
    MatChipsModule,
    MatProgressSpinnerModule,
    ProductComponent,
    AsyncPipe,
    CommonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CatalogueComponent implements OnDestroy {
  loading$!: BehaviorSubject<boolean>;
  filteredProducts$!: Observable<IProduct[]>;
  private _subscription = new Subscription();

  constructor(
    private cdr: ChangeDetectorRef,
    private productService: ProductsService
  ) {
    this.loading$ = this.productService.loading$;
    this.filteredProducts$ = this.productService.filteredProducts$;

    this._subscription.add(
      this.productService.filteredProducts$.subscribe((data) => {
        this.cdr.detectChanges();
      })
    );
  }

  ngOnDestroy(): void {
    this._subscription.unsubscribe();
  }

  setFilter(newFilter: string) {
    this.productService.filterSubject.next(newFilter);
  }
}
