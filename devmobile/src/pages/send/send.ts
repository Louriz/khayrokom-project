import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ControlePage} from "../controle/controle";
import { Geolocation } from '@ionic-native/geolocation';


/**
 * Generated class for the SendPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-send',
  templateUrl: 'send.html',
})
export class SendPage {

  constructor(public navCtrl: NavController, public alertCtrl: AlertController,private geolocation: Geolocation) {
  }

  clickposition() {



    this.geolocation.getCurrentPosition().then((resp) => {
      console.log(resp.coords.latitude);
      // resp.coords.longitude
    }).catch((error) => {
      console.log('Error getting location', error);
    });

    let watch = this.geolocation.watchPosition();
    watch.subscribe((data) => {
      // data can be a set of coordinates, or an error (if an error occurred).
      // data.coords.latitude
      // data.coords.longitude
    });

  }



goTowrandom(){
 var hachem = Math.round(Math.random()*10000000);
   let alert = this.alertCtrl.create({
      title: 'Your Transaction ID!',
      subTitle: '        ' + hachem,
      buttons: [ {
        text: 'OK',
        handler: () => {
          this.navCtrl.push(ControlePage);
        }
      }]
    })
    alert.present();

  }




}
