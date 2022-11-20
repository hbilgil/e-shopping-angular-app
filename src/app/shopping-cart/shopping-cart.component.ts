import { Component, OnInit } from '@angular/core';
import { ChosenItemsService } from '../Services/chosenItems.service';
import { ProductsService } from '../Services/products.service';
import { OrderedItems } from '../Services/orderedItems.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css'],
})
export class ShoppingCartComponent implements OnInit {

  chosenItems: any;
  orderedItems: any;
  totalQuantity: any;
  totalPrice: number = this.service2.totalPrice;
  shippingPrice: number = 20;

  constructor(private service: ProductsService, private service2: ChosenItemsService, private service3: OrderedItems) {
  }

  ngOnInit(): void {
    this.chosenItems = this.service2.items;
    this.totalQuantity = this.service2.totalQuantity;
    this.orderedItems = this.service3.orderedItems;
  }

  addItemsToOrderedItems() {
    this.service3.addOrderedItemToAccount(this.chosenItems)
    this.service2.removeAllItems(this.chosenItems)
    this.totalPrice = 0;
  }

  removeItem(item: any) {
    this.service2.removeItem(item);
    this.service.addItemQuantityToStock(item);
    this.totalPrice -= (item.quantity)*(item.price);
  }

  decreaseQuantity(item: any, itemSize: any) {
    this.service2.decreaseQuantity(item);
    this.service.addItemSizeToStock(item);
      switch(itemSize) {
          case 'S':
              item.stockA.S++;
          break;
          case 'M':
              item.stockA.M++;
          break;
          case 'L':
              item.stockA.L++;
          break;
          case 'XL':
              item.stockA.XL++;
          break;
          case '37':
              item.stockB.num1++;
          break;
          case '38':
              item.stockB.num2++;
          break;
          case '39':
              item.stockB.num3++;
          break;
          case '40':
              item.stockB.num4++;
          break;
          case '41':
              item.stockB.num5++;
          break;
          case '42':
              item.stockB.num6++;
          break;
          case '43':
              item.stockB.num7++;
          break;
          case '44':
              item.stockB.num8++;
          break;
          case '45':
              item.stockB.num9++;
          break;
          case '46':
              item.stockB.num10++;
      }
    this.totalPrice -= item.price;
  }

  increaseQuantity(item: any, itemSize: any) {
    this.service2.increaseQuantity(item);
    this.service.removeItemSizeFromStock(item);
    switch(itemSize) {
      case 'S':
          item.stockA.S--;
      break;
      case 'M':
          item.stockA.M--;
      break;
      case 'L':
          item.stockA.L--;
      break;
      case 'XL':
          item.stockA.XL--;
      break;
      case '37':
          item.stockB.num1--;
      break;
      case '38':
          item.stockB.num2--;
      break;
      case '39':
          item.stockB.num3--;
      break;
      case '40':
          item.stockB.num4--;
      break;
      case '41':
          item.stockB.num5--;
      break;
      case '42':
          item.stockB.num6--;
      break;
      case '43':
          item.stockB.num7--;
      break;
      case '44':
          item.stockB.num8--;
      break;
      case '45':
          item.stockB.num9--;
      break;
      case '46':
          item.stockB.num10--;
  }
    this.totalPrice += item.price;
  }
}