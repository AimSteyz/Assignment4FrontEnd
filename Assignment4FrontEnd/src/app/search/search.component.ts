import { Component } from '@angular/core';
import { waitForAsync } from '@angular/core/testing';
import { AppComponent } from '../app.component';
import axios from 'axios';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  async getArticles() {
    axios.get('https://api-wt.onrender.com/articles')
      .then((response) => {
        if (response.request.status == '200') {
          this.articleList = response.data;
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
          this.DisplayArticle.push(this.articleList[i]);
          this.IsDisplayArticleEmpty = false;
        } else {
          this.IsDisplayArticleEmpty = true;
        }
      }
  }

}
