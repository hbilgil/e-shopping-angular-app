import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ChosenItemsService } from '../Services/chosenItems.service';
import { FavoriteItemsService } from '../Services/favoriteItems.service';
import { ChosenProduct } from '../Models/chosenItem.model';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
})

export class ProductViewComponent implements OnInit  {

  product: any;
  productId: any;
  stockS: any;
  stockM: any;
  stockL: any;
  stockXL: any;
  stock1: any;
  stock2: any;
  stock3: any;
  stock4: any;
  stock5: any;
  stock6: any;
  stock7: any;
  stock8: any;
  stock9: any;
  stock10: any;
  stockTotal: any;
  productDetails: any;
  productCare: any;
  
  constructor(private activatedRoute: ActivatedRoute, 
              private service: ProductsService, 
              private service2: ChosenItemsService, 
              private service3: FavoriteItemsService) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element: any) => element.id == this.productId);
    this.productDetails = this.product.details.split(".");
    this.productCare = this.product.care.split(".");
    this.stockS = this.product.stockA.S;
    this.stockM = this.product.stockA.M;
    this.stockL = this.product.stockA.L;
    this.stockXL = this.product.stockA.XL;
    this.stock1 = this.product.stockB.num1;
    this.stock2 = this.product.stockB.num2;
    this.stock3 = this.product.stockB.num3;
    this.stock4 = this.product.stockB.num4;
    this.stock5 = this.product.stockB.num5;
    this.stock6 = this.product.stockB.num6;
    this.stock7 = this.product.stockB.num7;
    this.stock8 = this.product.stockB.num8;
    this.stock9 = this.product.stockB.num9;
    this.stock10 = this.product.stockB.num10;
    this.stockTotal = this.stockS + 
                      this.stockM + 
                      this.stockL + 
                      this.stockXL +
                      this.stock1 +
                      this.stock2 +
                      this.stock3 +
                      this.stock4 +
                      this.stock5 +
                      this.stock6 +
                      this.stock7 +
                      this.stock8 +
                      this.stock9 + 
                      this.stock10;
  }

  selectedSizeButtonValue: string = "";

  addToFavorites(item: any) {
    Swal.fire({ //a special embedded function to have a customized alert box with better UI and styling
      position: 'top-end',
      icon: 'success',
      title: item.name + ' was added to your favorites',
      showConfirmButton: false,
      timer: 1500
   })
    this.service.addItemToFavs(item);
    this.service3.addToFavorites(item);
  }

  removeFromFavorites(item: any) {
    this.service3.removeFromFavorites(item);
    this.service.removeItemFromFavs(item);
  }

  addToFavoritesByNotifyButton(e: any, item: any) {
    Swal.fire({ //a special embedded function to have a customized alert box with better UI and styling
      position: 'top-end',
      icon: 'success',
      title: `We will inform you  when ${item.name} arrived in our store`,
      showConfirmButton: false,
      timer: 1500
   })
    this.service.addItemToFavs(item);
    this.service3.addToFavorites(item);
    this.onChangeButtonColor (e);
  }

  handleAddToCart(e: any, value: string) {
    if(value === '') return;
    this.service.removeProduct(value, this.product);
    const { v4: uuidv4 } = require('uuid');
    let item: ChosenProduct = {
      uniqId: uuidv4(),
      id : this.product.id,
      name : this.product.name,
      price: this.product.price,
      image: this.product.image1,
      size: value,
      quantity: 1,
      stockA: {
        S: this.product.stockA.S,
        M: this.product.stockA.M,
        L: this.product.stockA.L,
        XL: this.product.stockA.XL,
      },
      stockB: {
        num1: this.product.stockB.num1,
        num2: this.product.stockB.num2,
        num3: this.product.stockB.num3,
        num4: this.product.stockB.num4,
        num5: this.product.stockB.num5,
        num6: this.product.stockB.num6,
        num7: this.product.stockB.num7,
        num8: this.product.stockB.num8,
        num9: this.product.stockB.num9,
        num10: this.product.stockB.num10,
      },
    };
    this.service2.addChosenItemToCart(item)
    this.stockTotal--;
    Swal.fire({ //a special embedded function to have a customized alert box with better UI and styling
      position: 'top-end',
      icon: 'success',
      title: this.product.name + ' was added to your shopping cart',
      showConfirmButton: false,
      timer: 1500
   })
    this.onChangeButtonColor(e);
  }

  onChangeButtonColor (e: any) {
    e.target.classList.add('active');
     setTimeout(() => {
       e.target.classList.remove("active");
     }, 1500);
   };
}