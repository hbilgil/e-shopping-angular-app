import { Component, OnInit } from '@angular/core';
import { ChosenItemsService } from '../Services/chosenItems.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})

export class HeaderComponent implements OnInit {

  chosenItems: any;
  chosenItemsTotalQuantity: any;
  

  constructor(private service: ChosenItemsService) { 
  }
  

  ngOnInit(): void {
    this.chosenItemsTotalQuantity = this.service.totalQuantity;
    this.chosenItems = this.service.items;
  }
}