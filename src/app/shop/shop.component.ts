import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
  providers: [
    ProductsService
  ]
})
export class ShopComponent implements OnInit {

  products: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.products;
  }

  genderSelectionButton: string = 'Men';
  categorySelectionButton: string = 'T-shirts';

  onFilterButtonGenderChanged(data: any) {
    this.genderSelectionButton = data;
  }

  onFilterButtonCategoryChanged(data: any) {
    this.categorySelectionButton = data;
  }

  getGenderSelection() {
    return this.genderSelectionButton;
  }

  getCategorySelection() {
    return this.categorySelectionButton;
  }

}
