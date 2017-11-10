import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { WelcomePage } from "../welcome/welcome";
import { NavTabsPage } from "../navtabs/tabs";

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  welcome() {
    this.navCtrl.push(WelcomePage);
  }

  signup() {
    // API connections
    this.navCtrl.push(NavTabsPage);
  }
}
