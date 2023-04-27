import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginBtn() {
    axios.post('http://localhost:8080/login', { email: this.username, password: this.password })
      .then((response) => {
        console.log(response);
        console.log(response.request.status);
        if (response.request.status == '200') {
          console.log(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          window.location.href = '/';
        }
      }
      , (error) => {
        console.log(error);
      });
  }
}
