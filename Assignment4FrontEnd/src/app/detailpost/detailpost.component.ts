import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-detailpost',
  templateUrl: './detailpost.component.html',
  styleUrls: ['./detailpost.component.css']
})
export class DetailpostComponent {

  title: string = '';
  body: string = '';
  rating: number = 0;
  resolved: boolean = false;
  time: string = '';
  brutauthor: string = '';
  author: string = '';
  commentsId: string = '';
  pageId: any = '';
  comments: any = [];
  commentauthor: any = [];
  commentsVotes: any = [];
  fullcomment: any = [];

  isPro: boolean = false;

  constructor(private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.apiCall(params.get('id'));
      this.pageId = params.get('id');
      this.getComments();
      this.getisPro();
    });
    // this.getAuthor();
  }

  apiCall(id: any) {
    axios.get('https://api-wt.onrender.com/articles/' + id)
      .then((response) => {
        if (response.request.status == '200') {
          this.title = response.data.title;
          this.body = response.data.content;
          this.rating = response.data.rating;
          this.resolved = response.data.resolved;
          this.time = response.data.timestamp.split('T')[0];
          this.brutauthor = response.data.author;
          this.getAuthor();
          // if comments is empty
          if (response.data.comments[0] == undefined) {
            this.commentsId = '';
          } else {
            this.commentsId = response.data.comments[0];
          }
        }
      }
      , (error) => {
        console.log(error);
      }
      );
  }

  getComments() {
    axios.get('https://api-wt.onrender.com/comments/' + this.commentsId)
      .then((response) => {
        if (this.commentsId == '') {
          this.comments = [];
        } else {
        if (response.request.status == '200') {
          for (let i = 0; i < response.data.length; i++) {
            if (response.data[i].article == this.pageId) {
              this.fullcomment.push({ author: response.data[i].author, content: response.data[i].content, id: response.data[i]._id });
            }
          }
        }
      }
      }
      , (error) => {
        console.log(error);
      }
      );
  }

  getAuthor() {
    axios.get("https://api-wt.onrender.com/users/" + this.brutauthor)
      .then((response) => {
        this.author = response.data.username
      }
      )
  }

  getisPro() {
    console.log('getisPro');
    axios.get('https://api-wt.onrender.com/users/' + localStorage.getItem('userID') )
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

}
