import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home-div2',
  templateUrl: './home-div2.component.html',
  styleUrls: ['./home-div2.component.css'],
})
export class HomeDiv2Component implements OnInit {
  products: any;
  product: any;
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.products; //products are provided by a service data imported
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');//productId is gathered by ID with a snapshot in page 
    this.product = this.service.products.find((element: any) => element.id == this.productId);//productId is found by a method
  }

}