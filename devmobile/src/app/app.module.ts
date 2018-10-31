import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import {SendPageModule} from "../pages/send/send.module";
import {SendPage} from "../pages/send/send";
import {ReceivePageModule} from "../pages/receive/receive.module";
import {ReceivePage} from "../pages/receive/receive";
import {ControlePage} from "../pages/controle/controle";
import {ControlePageModule} from "../pages/controle/controle.module";
import {LoginPage} from "../pages/login/login";
import {LoginPageModule} from "../pages/login/login.module";
import {RegistrationPageModule} from "../pages/registration/registration.module";
import {RegistrationPage} from "../pages/registration/registration";
import {ForgetpasswordPageModule} from "../pages/forgetpassword/forgetpassword.module";
import {ForgetpasswordPage} from "../pages/forgetpassword/forgetpassword";
import {MenuPageModule} from "../pages/menu/menu.module";
import {MenuPage} from "../pages/menu/menu";
import {AddClassPageModule} from "../pages/add-class/add-class.module"
import {AddClassPage} from "../pages/add-class/add-class";

import {AddUserPageModule} from "../pages/add-user/add-user.module"
import {AddUserPage} from "../pages/add-user/add-user";

import {HttpModule} from "@angular/http";
import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
    SendPageModule,ReceivePageModule,ControlePageModule,LoginPageModule,RegistrationPageModule,ForgetpasswordPageModule,MenuPageModule,AddClassPageModule, AddUserPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    SendPage,ReceivePage,ControlePage,LoginPage,RegistrationPage,ForgetpasswordPage,MenuPage,AddClassPage, AddUserPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
