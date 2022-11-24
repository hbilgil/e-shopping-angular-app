import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css'],
})
export class ShopComponent implements OnInit {

  products: any;

  constructor(private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.products; //products are imported from products service data
  }

  genderSelectionButton: string = 'Men'; //initial value for gender is assigned as "Men"
  categorySelectionButton: string = 'T-shirts';//initial value for category is assigned as "T-shirt"
  searchedText: string = '';//initial empty string is assigned for searchedText

  getGenderSelection() {//data is sent to child component of card component
    return this.genderSelectionButton;
  }

  getCategorySelection() {//data is sent to child component of card component
    return this.categorySelectionButton;
  }

  getSearchValue() {//data is sent to child component of card component
    return this.searchedText.toLowerCase();
  }

  onFilterButtonGenderChanged(data: any) {//data is derived from child component of categories component
    this.genderSelectionButton = data;
  }

  onFilterButtonCategoryChanged(data: any) {//data is derived from child component of categories component
    this.categorySelectionButton = data;
  }

  onSearchTextChanged(searchedValue: any) {//data is derived from child component of categories component
    this.searchedText = searchedValue;
  }
}