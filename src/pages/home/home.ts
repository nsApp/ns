import { Component, OnInit } from '@angular/core';
import { NavController, App, ItemSliding } from 'ionic-angular';

import { Article } from "../../data/articles.interface";
import articles from "../../data/articles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage implements OnInit {
  // the collections is an array
  articleCollection: {id: string, title: string, text: string, website: string}[];

  ngOnInit() {
    this.articleCollection = articles;
  }

  delete(article) {
    // slidingItem.close();
    for(var i=0; i<this.articleCollection.length; i++) {
      if(this.articleCollection[i] == article)
        this.articleCollection.splice(i, 1);
    }
  }
}
