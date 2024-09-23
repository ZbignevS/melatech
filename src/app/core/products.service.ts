import { Injectable } from '@angular/core';
import { BehaviorSubject, delay, map, of, switchMap } from 'rxjs';
import { Products } from '../data/products';

@Injectable({
  providedIn: 'root',
})
export class ProductsService {
  loading$ = new BehaviorSubject<boolean>(false);
  filterSubject = new BehaviorSubject<string>('');
  products = Products;
  filteredProducts$ = this.filterSubject.pipe(
    switchMap((filterValue) => {
      this.loading$.next(true);
      return of(this.products).pipe(
        delay(500),
        map((products) => {
          const filtered = products.filter((product) =>
            filterValue ? product.category.includes(filterValue) : true
          );
          return { filtered, loading: false };
        })
      );
    }),
    map(({ filtered, loading }) => {
      this.loading$.next(loading);
      return filtered;
    })
  );

  constructor() {
    this.filteredProducts$.subscribe(() => {
      this.loading$.next(false);
    });
  }
}
