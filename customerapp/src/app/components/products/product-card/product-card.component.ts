import { Component, Input, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.css']
})
export class ProductCardComponent implements OnInit {
  @Input()
  product:Partial<Product> = {};
  constructor(private productService:ProductService) { }
  ngOnInit(): void {
  }
  addToCart(id:number) {
    this.productService.addToCart(id);
  }
}
