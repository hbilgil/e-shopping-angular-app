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

  constructor(private activatedRoute: ActivatedRoute, private service: ProductsService) { 
  }

  ngOnInit(): void {
    this.products = this.service.products; //products are provided by a service data imported
    this.productId = this.activatedRoute.snapshot.paramMap.get('id'); //productId is gathered by ID with a snapshot in page 
    this.product = this.service.products.find((element: any) => element.id == this.productId); //productId is found by a method
  }

  @Input() genderSelectionResult: string = ''; //data is imported by input directive from parent component(shop)
  @Input() categorySelectionResult: string = ''; //data is imported by input directive from parent component(shop)
  @Input() searchValueResult: string = ''; //data is imported by input directive from parent component(shop)
}