import { Component } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-ask',
  templateUrl: './ask.component.html',
  styleUrls: ['./ask.component.css']
})
export class AskComponent {

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

  goToLogin() {
    window.location.href = '/login';
  }

  title: string = '';
  content: string = '';

  askBtn() {

    console.log(localStorage.getItem('user'));
    axios.post('http://localhost:8080/articles', { title: this.title, content: this.content, author: localStorage.getItem('user') })
      .then((response) => {
        console.log(response);
        if (response.request.status == '200') {
          console.log(response.data.user);
          window.location.href = '/';
        }
      }, (error) => {
        console.log(error);
      });
  }
}
