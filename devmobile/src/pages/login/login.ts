import { Component } from '@angular/core';
//import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HomePage} from "../home/home";
import {RegistrationPage} from "../registration/registration";
import {ForgetpasswordPage} from "../forgetpassword/forgetpassword";
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";
/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  UserName :any;
  Password:any;

  constructor(private LoadincC:LoadingController,private http:Http,private AlertC:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  Check(){

      let loader = this.LoadincC.create({content:"Loading"})
      loader.present().then(()=>{
        this.http.post("http://localhost:3005/login",{username:this.UserName,password:this.Password}).subscribe(
          data  =>{
            console.log(data);
              this.navCtrl.push(HomePage);
              loader.dismissAll();
          },
          err => {
            let alert = this.AlertC.create(
              {
                title:"ERROR",
                message:err,
                buttons: [
                  {
                    text:"OK",
                    role:"cancel",
                    handler: ()=>{
                        console.log("hachemmm");
                      loader.dismissAll();

                    }
                  }
                ]

          }

            );
            alert.present();
          }

      )
      })


  }

 /* constructor(public navCtrl: NavController, public navParams: NavParams) {
  }*/
  /*goToHome(){
    this.navCtrl.push(HomePage);
  }*/
  goToRegister(){

    this.navCtrl.push(RegistrationPage);
  }
  goToForget(){
    this.navCtrl.push(ForgetpasswordPage);
  }



}
