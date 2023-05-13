import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  isLogged: boolean = false;
  username: string = "None";
  userId: string = "";
  constructor() {
    this.isLogged = this.CheckLogin();
    if (this.isLogged) {
      this.getUser();
    }
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

  getUser() {
    this.getUserID();
    axios.get("https://api-wt.onrender.com/users/" + this.getUserID())
      .then((response) => {
        this.username = response.data.username
      }
    )
  }

  getUserID() {
    var user = JSON.parse(localStorage.getItem('user') || '{}');
    return user._id;
  }

}
