import { Component, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.css'],
  providers: [
    ProductsService
  ]
})

export class ProductViewComponent implements OnInit  {
  
  product: any;
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element) => element.id == this.productId);
  }

}
