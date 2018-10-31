import { Component } from '@angular/core';
import {AlertController, IonicPage, LoadingController, NavController, NavParams} from 'ionic-angular';
import {Http} from "@angular/http";

/**
 * Generated class for the RegistrationPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-registration',
  templateUrl: 'registration.html',
})

//


export class RegistrationPage {
  //
  UserName :any;
  Password:any;
  Email:any;
  RPassword:any;
  constructor(private LoadincC:LoadingController,private http:Http,private AlertC:AlertController,public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RegistrationPage');
  }

  Check(){
    if(this.RPassword != this.Password){
      let alert = this.AlertC.create(
        {
          title:"Verify Password",
          message:"please verify that both passwords are identical",
          buttons: [
            {
              text:"OK",
              role:"cancel",
              handler: ()=>{
                this.Password ="";
                this.RPassword ="";
              }
            }
          ]
        }
      );
      alert.present();
    }else{
      let loader = this.LoadincC.create({content:"Loading"})
      loader.present().then(()=>{
        this.http.post("https://robocupfrance.000webhostapp.com/insertUser.php",{user:this.UserName,password:this.Password,Email:this.Email}).subscribe(
          data  =>{
            console.log(data);
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
                      this.Password ="";
                      this.RPassword ="";
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

  }
}
