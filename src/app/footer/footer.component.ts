import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  enteredSearchValue: string = ''; //empty string value is automatically assigned in start

  validateEmail (email: any) { //a function to return whether the email is valid or not..
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  }
  
  subscribeToNewsletter() {// a function to subscribe to the weekly newsletter
    if(this.validateEmail(this.enteredSearchValue)) { //if the provided email is valid
      Swal.fire({ //an async function provided by an imported file
        position: 'top-end',
        icon: 'success',
        title: `Hi, </br> We will sent our weekly newsletter to ${this.enteredSearchValue}!`,
        showConfirmButton: false,
        timer: 1500
      })
    } else {
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        footer: 'Please provide a valid e-mail address!'
      })
    }
  }
}