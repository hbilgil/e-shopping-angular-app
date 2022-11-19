import { Component, OnInit } from '@angular/core';
import { ProductsService } from './Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  title = "e-shopping-angular-app";
  product: any;
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { 
  }

  ngOnInit(): void {
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element: any) => element.id == this.productId);
  }
}