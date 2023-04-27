import { Component } from '@angular/core';

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
  }

}
