import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/shared/model/Product';
import { ProductService } from 'src/app/shared/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  productList: Product[] = [];
  selectedBrand:string = "All";
  brands = ["All", "Apple", "Realme", "Nokia", "Motorolla"];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.productList = this.productService.getProducts();
  }
  
  
}
