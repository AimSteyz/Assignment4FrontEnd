import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLogged: boolean = false;
  constructor() {
    this.isLogged = this.CheckLogin();
  }

  CheckLogin() {
    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }
  }

}
