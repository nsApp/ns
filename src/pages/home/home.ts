import { Component, OnInit } from '@angular/core';
import { NavController, App } from 'ionic-angular';

import { Article } from "../../data/articles.interface";
import articles from "../../data/articles";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage implements OnInit {
  // the collections is an array
  articleCollection: {id: string, title: string, text: string}[];

  ngOnInit() {
    this.articleCollection = articles;
  }
}
