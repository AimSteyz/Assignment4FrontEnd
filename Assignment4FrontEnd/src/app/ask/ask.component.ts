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
  author: any = localStorage.getItem('user');
  authorId: any = localStorage.getItem('userID');
  // get the _id of the author
  askBtn() {
    console.log(this.title);
    console.log(this.content);
    console.log(this.authorId);
    axios.post('https://api-wt.onrender.com/articles', { title: this.title, content: this.content, author: this.authorId })
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
