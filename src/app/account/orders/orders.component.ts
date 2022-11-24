import { Component, OnInit } from '@angular/core';
import { OrderedItems } from 'src/app/Services/orderedItems.service';
import { ProductsService } from 'src/app/Services/products.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-orders',
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})

export class OrdersComponent implements OnInit {
  orderedProducts: any;
  totalPrice: number = 0;
  totalQuantity: any;
  shippingPrice: number = 20;

  constructor(private service: OrderedItems, private service2: ProductsService) { 
    
  }

  ngOnInit(): void {
    this.orderedProducts = this.service.orderedItems;
    this.totalPrice = this.service.totalPrice;
    this.totalQuantity = this.service.totalQuantity;
  }

  removeItem(item: any) {
    Swal.fire({ //a special embedded function to have a customized alert box with better UI and styling
      title: 'Are you sure?',
      text: "Your ordered item will be COMPLETELY removed!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, cancel!',
      reverseButtons: true
  }).then((result) => {
      if (result.isConfirmed) {
      Swal.fire( //a special embedded function to have a customized alert box with better UI and styling
          'Deleted!',
          'Your ordered item was removed.',
          'success'
      )
      this.service.removeItem(item);
      this.service2.addItemQuantityToStock(item);
      this.totalQuantity.splice(this.totalQuantity.length-item.quantity, item.quantity);
      this.totalPrice -= (item.quantity)*(item.price);
      } else if (
          result.dismiss === Swal.DismissReason.cancel
      ) {
          Swal.fire( //a special embedded function to have a customized alert box with better UI and styling
          'Cancelled',
          'Your ordered item is safe :)',
          'error'
          )
          }
      })
  }
}