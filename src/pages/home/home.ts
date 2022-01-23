import { Component } from '@angular/core';
import { IonicPage, MenuController, NavController } from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'  //Referência para qual página está controlando
})
export class HomePage {

//Para injetar objetos, deve instânciar como parâmetro do construtor
  constructor(public navCtrl: NavController, public menu:MenuController) {

  }

  ionViewWillEnter() {
      this.menu.swipeEnable(false);
 }

  ionViewDidLeave() {
      this.menu.swipeEnable(true);
 }

  login() {
    this.navCtrl.setRoot("CategoriasPage")
  }

}
