import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';
import { ChosenItemsService } from '../Services/chosenItems.service';

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

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService, private service2: ChosenItemsService) {}

  
  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element) => element.id == this.productId);
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
    };

    let item: chosenProduct = {
      uniqId: uuidv4(),
      id : this.product.id,
      name : this.product.name,
      price: this.product.price,
      image: this.product.image1,
      size: value,
      quantity: 1,
    };

    this.service2.addChosenItemToCart(item)
    this.stockTotal--;
    this.onChangeButtonColor(e);
  }
}
