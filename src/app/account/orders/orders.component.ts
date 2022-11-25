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
    this.orderedProducts = this.service.orderedItems; //ordered items is provided by a service data imported
    this.totalPrice = this.service.totalPrice; //total price is migrated after chosenItems sent to ordered Items data
    this.totalQuantity = this.service.totalQuantity; //totalQuantity is migrated after chosenItems sent to ordered Items data
  }

  removeItem(item: any) {// a function to remove a ordered item
    Swal.fire({ //an async function provided by an imported file
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
      if (result.isConfirmed) { //if approved, the result is triggered
      Swal.fire(
        'Deleted!',
        `${item.name} </br>was removed from your order`,
        'success'
      )
      this.service.removeItem(item); //a function declared in orderedItems service data is called back
      this.service2.addItemQuantityToStock(item); //a function declared in products service data is called back
      this.totalQuantity.splice(this.totalQuantity.length-item.quantity, item.quantity);//total quantity length is decreased by the size of total quantity of item ordered
      this.totalPrice -= (item.quantity)*(item.price);//total price is diminished by the value of total price multiplied by the quantity of the item ordered
      } else if ( //if canceled a message is thrown ensuring that ordered item is still in place
          result.dismiss === Swal.DismissReason.cancel
      ) {
          Swal.fire(
          'Cancelled',
          'Your ordered item is safe :)',
          'error'
          )
        }
    })
  }
}