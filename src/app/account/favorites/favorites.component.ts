import { Component, OnInit } from '@angular/core';
import { FavoriteItemsService } from 'src/app/Services/favoriteItems.service';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  favoriteItems: any;

  constructor(private service: FavoriteItemsService, private service2: ProductsService) { }

  ngOnInit(): void {
    this.favoriteItems = this.service.items;
  }

  removeItem(item: any) {
    this.service.removeFromFavorites(item);
    this.service2.removeItemFromFavs(item);
    this.service.saveInFavoriteItemsServicesData
  }
}
