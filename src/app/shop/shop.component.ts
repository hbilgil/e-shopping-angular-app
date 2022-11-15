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
  searchedText: string = '';

  getGenderSelection() {
    return this.genderSelectionButton;
  }

  getCategorySelection() {
    return this.categorySelectionButton;
  }

  getSearchValue() {
    return this.searchedText.toLowerCase();
  }

  onFilterButtonGenderChanged(data: any) {
    this.genderSelectionButton = data;
  }

  onFilterButtonCategoryChanged(data: any) {
    this.categorySelectionButton = data;
  }

  onSearchTextChanged(searchedValue: any) {
    this.searchedText = searchedValue;
  }
}
