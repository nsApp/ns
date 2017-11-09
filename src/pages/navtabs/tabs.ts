import { Component } from '@angular/core';

import { CategoryPage } from '../category/category';
import { TagPage } from '../tag/tag';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class NavTabsPage {

  tab1Root = HomePage;
  tab2Root = CategoryPage;
  tab3Root = TagPage;

  constructor() {

  }
}
