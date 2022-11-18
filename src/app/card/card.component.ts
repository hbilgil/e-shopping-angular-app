import { Component, Input, OnInit } from '@angular/core';
import { ProductsService } from '../Services/products.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})

export class CardComponent implements OnInit {
  products: any;
  product: any;
  productId: any;

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { }

  ngOnInit(): void {
    this.products = this.service.products;
    this.productId = this.activatedRoute.snapshot.paramMap.get('id');
    this.product = this.service.products.find((element) => element.id == this.productId);
  }

  @Input() genderSelectionResult: string = '';
  @Input() categorySelectionResult: string = '';
  @Input() searchValueResult: string = '';
}