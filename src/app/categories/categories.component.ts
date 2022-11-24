import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})

export class CategoriesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  selectedGenderButtonValue: string = "Men"; //Men gender is automatically chosen in start
  selectedCategoryButtonValue: string = "T-shirts"; //T-shirt category is automatically chosen in start
  enteredSearchValue: string = ''; //empty string value is automatically assigned in start

  @Output() genderFilterButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>(); //gender value is emitted by an event emitter with output directive to parent component
  @Output() categoryFilterButtonSelectionChanged: EventEmitter<string> = new EventEmitter<string>(); //category value is emitted by an event emitter with output directive to parent component
  @Output() searchTextChanged: EventEmitter<string> = new EventEmitter<string>(); //searched value is emitted by an event emitter with output directive to parent component

  onButtonSelectionGenderChanged() { //a function to trigger event emitting
    this.genderFilterButtonSelectionChanged.emit(this.selectedGenderButtonValue);
  }

  onButtonSelectionCategoryChanged() { //a function to trigger event emitting
    this.categoryFilterButtonSelectionChanged.emit(this.selectedCategoryButtonValue);
  }

  onSearchTextChanged() { //a function to trigger event emitting
    this.searchTextChanged.emit(this.enteredSearchValue);
  }
}