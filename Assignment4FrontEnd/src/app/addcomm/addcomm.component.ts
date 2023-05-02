import { Component, Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-addcomm',
  templateUrl: './addcomm.component.html',
  styleUrls: ['./addcomm.component.css']
})
export class AddcommComponent {
  answer: string = '';
  userId: any = localStorage.getItem('userID');
  @Input() postId: any;
  username: string = "";

    constructor() { }

    ngOnInit(): void {
      this.getAuthor();
    }

    getAuthor(){
      axios.get("http://localhost:8080/users/" + this.userId)
        .then((response) => {
          this.username = response.data.username
        }
        )
    }

    postComm() {
      console.log(this.answer);
      // redirect to detailpost
      axios.post('http://localhost:8080/comments', {
        author: this.userId,
        content: this.answer,
        article: this.postId
      })
      .then((response) => {
        console.log(response);
      }
      , (error) => {
        console.log(error);
      }
      );
      this.answer = '';
      window.location.href = '/detailpost/' + this.postId;
    }
  
}
