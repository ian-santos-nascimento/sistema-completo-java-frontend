import { Component } from '@angular/core';
import { IonicPage, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  //Referência para qual página está controlando
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

}
