import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = '';
  password: string = '';
  loginBtn() {
    console.log('login button clicked' + ' ' + this.username + ' ' + this.password);
  }
}
