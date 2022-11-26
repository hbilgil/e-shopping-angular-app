import { Component, OnInit } from '@angular/core';
import { FavoriteItemsService } from 'src/app/Services/favoriteItems.service';
import { ProductsService } from 'src/app/Services/products.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteItems: any;

  constructor(private service: FavoriteItemsService, private service2: ProductsService) { }

  ngOnInit(): void {
    this.favoriteItems = this.service.items; //favorite items is provided by a service data imported
  }

  removeItem(item: any) { // a function to remove a favorite item
    Swal.fire({ //an async function provided by an imported file
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, delete it!'
    }).then((result) => { //if approved, the result is triggered
      if (result.isConfirmed) {
        Swal.fire(
          'Deleted!',
          `${item.name} </br>was removed from your favorites`,
          'success'
        )
        this.service.removeFromFavorites(item); //a function declared in favoriteItems service data is called back
        this.service2.removeItemFromFavs(item); //a function declared in Products service data is called back
      }
  })
  }
}
