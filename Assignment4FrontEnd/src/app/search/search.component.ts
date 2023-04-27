import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  async getArticles() {
    axios.get('http://localhost:8080/articles')
      .then((response) => {
        if (response.request.status == '200') {
          this.articleList = response.data;
          console.log(this.articleList.length);
          this.isArticleListEmpty = false;
          return response.data;
        }
      }, (error) => {
        console.log(error);
      });
  }

  constructor() {
    this.getArticles();
  }
  articleList: any = [];
  isArticleListEmpty: boolean = true;
  searchedArticle: string = '';
  DisplayArticle: any = [];
  IsDisplayArticleEmpty: boolean = true;

  searchBtn() {
    this.DisplayArticle = [];
    for (let i = 0; i < this.articleList.length; i++) {
        if (this.articleList[i].title.includes(this.searchedArticle)) {
          console.log(this.articleList[i].title);
          this.DisplayArticle.push(this.articleList[i]);
          this.IsDisplayArticleEmpty = false;
        } else {
          this.IsDisplayArticleEmpty = true;
        }
      }
  }

}
