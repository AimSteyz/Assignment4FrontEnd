import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  isLogged: boolean = false;
  isPro: boolean = false;
  constructor() {
    this.isLogged = this.CheckLogin();
    console.log(this.isLogged);
    if (this.isLogged) {
      this.getisPro();
    }
  }

  CheckLogin() {
    if (localStorage.getItem('user')) {
      return true;
    }
    else {
      return false;
    }
  }

  getisPro() {
    axios.get('http://localhost:8080/users/' + localStorage.getItem('userID') )
      .then(res => {
        console.log(res.data);
        if (res.data.roles == true) {
          this.isPro = true;
        }
        else {
          this.isPro = false;
        }
      }
      )
  }

  setPro() {
    this.isPro = true;
    axios.put('http://localhost:8080/users/' + localStorage.getItem('userID'), {roles: 'true'} )
      .then(res => {
        console.log(res.data);
      }
      )
  }

  unsetPro() {
    this.isPro = false;
    axios.put('http://localhost:8080/users/' + localStorage.getItem('userID'), {roles: 'false'} )
      .then(res => {
        console.log(res.data);
        console.log("set role to not pro");
        console.log(this.isPro);
      }
      )
  }

}
