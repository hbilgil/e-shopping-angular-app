import { Component, OnInit } from '@angular/core';
import { ChosenItemsService } from '../Services/chosenItems.service';
import { ProductsService } from '../Services/products.service';
import { OrderedItems } from '../Services/orderedItems.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

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
    this.chosenItems = this.service2.items;//chosen items are imported from chosenItems service data
    this.totalQuantity = this.service2.totalQuantity;//total quantity is imported from chosenItems service data
    this.orderedItems = this.service3.orderedItems;//ordered items are imported from orderedItems service data
  }

  addItemsToOrderedItems() {//a function to add chosen Items to Ordered Items in account
    Swal.fire(//an async function provided by an imported file
        'Good job!',
        'Your items were added to your account!',
        'success'
    )
    this.service3.addOrderedItemToAccount(this.chosenItems)//a function to be called back from orderedItems service data
    this.service2.removeAllItems(this.chosenItems)//a function to be called back from chosenItems service data
    this.totalPrice = 0;
  }

  removeItem(item: any) {//a function to remove an item from shopping cart
    Swal.fire({//an async function provided by an imported file
        title: 'Are you sure?',
        text: "You won't be able to revert this!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Yes, delete it!'
      }).then((result) => {//if approved
        if (result.isConfirmed) {
          Swal.fire(
            'Deleted!',
            item.name + ' was removed',
            'success'
          )
        this.service2.removeItem(item);//a function to be called back from chosenItems service data
        this.service.addItemQuantityToStock(item);//a function to be called back from products service data
        this.totalPrice -= (item.quantity)*(item.price);
        }
    })
  }

  decreaseQuantity(item: any, itemSize: any) {//a function to decrease quantity of a chosen Item if there are more than 1 quantity
    this.service2.decreaseQuantity(item);//a function to be called back from chosenItems service data
    this.service.addItemSizeToStock(item);//a function to be called back from products service data
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

  increaseQuantity(item: any, itemSize: any) {//a function to increase quantity of a chosen Item
    this.service2.increaseQuantity(item);//a function to be called back from chosenItems service data
    this.service.removeItemSizeFromStock(item);//a function to be called back from products service data
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