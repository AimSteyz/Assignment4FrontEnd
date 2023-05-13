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
    console.log(this.username);
    console.log(this.password);
    axios.post('https://api-wt.onrender.com/login', { email: this.username, password: this.password })
      .then((response) => {
        console.log(response);
        console.log(response.request.status);
        if (response.request.status == '200') {
          console.log(response.data.user);
          localStorage.setItem('user', JSON.stringify(response.data.user));
          console.log(response.data.user._id);
          localStorage.setItem('userID', response.data.user._id);
          window.location.href = '/';
        }
      }
      , (error) => {
        console.log(error);
      });
  }
}
