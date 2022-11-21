import { Component, OnInit } from '@angular/core';
import { OrderedItems } from 'src/app/Services/orderedItems.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orderedProducts: any;
  totalPrice: number = 0;
  totalQuantity: any;

  constructor(private service: OrderedItems, private service2: ProductsService) { 
    
  }

  ngOnInit(): void {
    this.orderedProducts = this.service.orderedItems;
    this.totalPrice = this.service.totalPrice;
    this.totalQuantity = this.service.totalQuantity;
  }

  removeItem(item: any) {
    this.service.removeItem(item);
    this.service2.addItemQuantityToStock(item);
    this.totalQuantity.splice(this.totalQuantity.length-item.quantity, item.quantity);
    this.totalPrice -= (item.quantity)*(item.price);
  }

}
