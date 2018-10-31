import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {LoginPage} from "../pages/login/login";
import {MenuPage} from "../pages/menu/menu";
import {ForgetpasswordPage} from "../pages/forgetpassword/forgetpassword";
import {AddClassPage} from "../pages/add-class/add-class";
import {AddUserPage} from "../pages/add-user/add-user";



@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any = AddUserPage;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}

