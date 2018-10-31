import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {SendPage} from "../send/send";
import {ReceivePage} from "../receive/receive";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {

  }

  goToSendPag(){
    this.navCtrl.push(SendPage);
  }

  goToReceivePag(){

    ////
    this.navCtrl.push(ReceivePage);
  }


}
