import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ChosenItemsService } from '../Services/chosenItems.service';
import { FavoriteItemsService } from '../Services/favoriteItems.service';

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
  
  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService, private service2: ChosenItemsService, private service3: FavoriteItemsService) {}

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element: any) => element.id == this.productId);
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
    this.service.addItemToFavs(item);
    this.service3.addToFavorites(item);
  }

  removeFromFavorites(item: any) {
    this.service3.removeFromFavorites(item);
    this.service.removeItemFromFavs(item);
  }

  onChangeButtonColor (e: any) {
   e.target.classList.add('active');
    setTimeout(() => {
      e.target.classList.remove("active");
    }, 1500);
  };

  handleAddToCart(e: any, value: string) {
    if(value === '') return;
    this.service.removeProduct(value, this.product);
    const { v4: uuidv4 } = require('uuid');
    interface chosenProduct {
      uniqId: string;
      id: number;
      name: string;
      price: number;
      image: string;
      size: string;
      quantity: number;
      stockA: {
        S: number;
        M: number;
        L: number;
        XL: number;};
      stockB: {
        num1: number;
        num2: number;
        num3: number;
        num4: number;
        num5: number;
        num6: number;
        num7: number;
        num8: number;
        num9: number;
        num10: number;
      };
    };

    let item: chosenProduct = {
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
    this.onChangeButtonColor(e);
  }
}