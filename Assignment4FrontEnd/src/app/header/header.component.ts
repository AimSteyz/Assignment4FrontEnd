import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: boolean = false;
  constructor() {
    this.isLogged = this.CheckLogin();
  }

  CheckLogin() {
    if (localStorage.getItem('user')) {
      // console.log('user logged in' + localStorage.getItem('user'));
      return true;
    }
    else {
      return false;
    }
  }

  logout() {
    localStorage.removeItem('user');
    window.location.href = '/';
  }
}
