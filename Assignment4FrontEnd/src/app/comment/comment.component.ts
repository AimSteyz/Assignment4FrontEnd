import { Component } from '@angular/core';
import { Input } from '@angular/core';
import axios from 'axios';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent {
  @Input() comment: string = '';
  @Input() author: string = '';
  @Input() id: any = '';
  hasVoted: boolean = false;
  compVote: number = 0;

  constructor() { }

  ngOnInit(): void {
    this.getAuthor()
    this.getCommentVotes()
  }

  getAuthor() {
    axios.get("http://localhost:8080/users/" + this.author)
      .then((response) => {
          this.author = response.data.username
      }, (error) => {
        this.author = "[Deleted user]"
      })
  }

  getCommentVotes() {
    axios.get("http://localhost:8080/comments/" + this.id)
      .then((response) => {
        this.compVote = response.data.upVotes
      }
    )
  }


  upVotes(value: any) {
    this.hasVoted = true;
    axios.put("http://localhost:8080/comments/" + this.id, { upVotes: this.compVote + value, content: this.comment})
      .then((response) => {
        console.log(response.data)
        this.getVote();
      }
    )
  }

  getVote() {
    axios.get("http://localhost:8080/comments/" + this.id)
      .then((response) => {
        this.compVote = response.data.upVotes
      }
    )
  }
}
