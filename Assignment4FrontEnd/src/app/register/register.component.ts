import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  username: string = '';
  email: string = '';
  password: string = '';
  registerBtn() {
    console.log('register button clicked' + ' ' + this.username +  ' ' + this.email + ' ' + this.password);
    axios.post('http://localhost:8080/register', { username: this.username, email: this.email, password: this.password })
      .then((response) => {
        console.log(response);
      }, (error) => {
        console.log(error);
      });
  }

}
