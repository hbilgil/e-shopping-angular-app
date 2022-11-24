import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {

  constructor(public authService: AuthService) { }

  ngOnInit(): void {
  }

  logOut() {// a function to end session as a logged in user
    Swal.fire({ //an async function provided by an imported file
      title: 'Are you sure?',
      text: "You will be logged out!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, please!'
    }).then((result) => { //if approved, the result is triggered
      if (result.isConfirmed) {
        Swal.fire(
          'Logged out!',
          'Thank you for visiting us',
          'success'
        )
        this.authService.SignOut(); //a function declared in authentication service data is called back
      }
    })
  }
}