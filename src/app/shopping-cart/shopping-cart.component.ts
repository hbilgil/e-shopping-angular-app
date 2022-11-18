import { Component, OnInit } from '@angular/core';
import { ChosenItemsService } from '../Services/chosenItems.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {
  chosenItems: any;
  totalQuantity: any;
  totalPrice: number = this.service.totalPrice;
  shippingPrice: number = 20;

  constructor(private service: ChosenItemsService) { }

  ngOnInit(): void {
    this.chosenItems = this.service.items;
    this.totalQuantity = this.service.totalQuantity;
  }

  removeItem(item: any) {
    this.service.removeItem(item);
  }
}
