import { Component, Input, OnInit } from '@angular/core';
import { Category, Product } from '../models/models';
import { NavigationService } from '../services/navigation.service';

@Component({
  selector: 'app-suggested-product',
  templateUrl: './suggested-product.component.html',
  styleUrls: ['./suggested-product.component.css']
})
export class SuggestedProductComponent implements OnInit{
  @Input() category: Category = {
    id: 0,
    category: '',
    subCategory: '',
  };
  @Input() count: number = 3;
  products: Product[] = [];

  constructor(private navigationService: NavigationService){}

  ngOnInit(): void {
    this.navigationService
    .getProducts(
      this.category.category,
      this.category.subCategory,
      this.count
    )
    .subscribe((res: any[]) => {
      for(let product of res){
        this.products.push(product);
      }
    });
  }
}