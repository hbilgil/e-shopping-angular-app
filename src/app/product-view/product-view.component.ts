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
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');//productId is gathered by ID with a snapshot in page 
    this.product = this.service.products.find((element: any) => element.id == this.productId);//productId is found by a method
    this.productDetails = this.product.details.split("."); //tech details string with lots of sentences are returned into an array of items splitted by a dot.
    this.productCare = this.product.care.split("."); //care details string with lots of sentences are returned into an array of items splitted by a dot.
    //stock levels are derived from product service data imported
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
    //total stock level is decided by summing all stock levels in sizes
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

  selectedSizeButtonValue: string = ""; //initial empty string value for selected size

  addToFavorites(item: any) { // a function to add an item into favorite items
    Swal.fire({ //an async function provided by an imported file
      position: 'top-end',
      icon: 'success',
      title: item.name + ' was added to your favorites',
      showConfirmButton: false,
      timer: 1500
   })
    this.service.addItemToFavs(item); //a function declared in products service data is called back
    this.service3.addToFavorites(item);//a function declared in favorite Items service data is called back
  }

  removeFromFavorites(item: any) {// a function to remove an item into favorite items
    this.service3.removeFromFavorites(item);//a function declared in favorite items service data is called back
    this.service.removeItemFromFavs(item);//a function declared in products service data is called back
  }

  addToFavoritesByNotifyButton(e: any, item: any) {// a function to add an item with all sizes are out of stock into favorite items when notifyMe button is clicked
    Swal.fire({ //an async function provided by an imported file
      position: 'top-end',
      icon: 'success',
      title: `We will inform you  when ${item.name} arrived in our store`,
      showConfirmButton: false,
      timer: 1500
   })
    this.service.addItemToFavs(item);//a function declared in products service data is called back
    this.service3.addToFavorites(item);//a function declared in favorite items service data is called back
    this.onChangeButtonColor(e); //button color is changed for a while for a better UI and UX
  }

  handleAddToCart(e: any, value: string) {// a function to add an item with chosen size into shopping cart
    if(value === '') {
      return; //if size is not chosen, returns..
    } else {
      if(this.isItemOver(value)) {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something went wrong!',
          footer: `There is no ${this.product.name} in our stocks for size '${value}'`
        })
      } else { 
        this.service.removeProduct(value, this.product);//a function declared in products service data is called back
        const { v4: uuidv4 } = require('uuid');//a uniq id is assigned as it will be used while removing without a problem as some products will have the same name, id, size etc.
        let item: ChosenProduct = { //a new object is created based on ChosenProduct interface to assign size, quantity
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
        this.service2.addChosenItemToCart(item)//a function declared in chosenItems service data is called back
        this.stockTotal--; //stockTotal is diminished here as well
        Swal.fire({ //an async function provided by an imported file
        position: 'top-end',
        icon: 'success',
        title: this.product.name + ' was added to your shopping cart',
        showConfirmButton: false,
        timer: 1500
        })
        this.onChangeButtonColor(e);//button color is changed for a while for a better UI and UX
      }   
    }
  }

  isItemOver(size: any) {//a function to return comparison value to check stocks for sizes
    if(size === 'S') {
      return this.product.stockA.S === 0;
     } else if (size === 'M') {
      return this.product.stockA.M === 0;
     } else if (size === 'L') {
      return this.product.stockA.L === 0;
     } else if (size === 'XL') {
      return this.product.stockA.XL === 0;
     } else if (size === '37') {
      return this.product.stockB.num1 === 0;
     } else if (size === '38') {
      return this.product.stockB.num2 === 0;
     } else if (size === '39') {
      return this.product.stockB.num3 === 0;
     } else if (size === '40') {
      return this.product.stockB.num4 === 0;
     } else if(size === '41') {
      return this.product.stockB.num5 === 0;
     } else if(size === '42') {
      return this.product.stockB.num6 === 0;
     } else if(size === '43') {
      return this.product.stockB.num7 === 0;
     } else if(size === '44') {
      return this.product.stockB.num8 === 0;
     } else if(size === '45') {
      return this.product.stockB.num9 === 0;
     } else {
      return this.product.stockB.num10 === 0;
     }
  }

  onChangeButtonColor (e: any) { //a function to change button background color for a while when clicked 
    e.target.classList.add('active');
     setTimeout(() => {
       e.target.classList.remove("active");
     }, 1500);
   };
}