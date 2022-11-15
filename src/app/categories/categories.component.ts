import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedGenderButtonValue: string = "Men";
  selectedCategoryButtonValue: string = "T-shirts";

  @Output() genderFilterButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();
  @Output() categoryFilterButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>();

  onButtonSelectionGenderChanged() {
    this.genderFilterButtonSelectionChanged.emit(this.selectedGenderButtonValue);
  }

  onButtonSelectionCategoryChanged() {
    this.categoryFilterButtonSelectionChanged.emit(this.selectedCategoryButtonValue);
  }
  

}
