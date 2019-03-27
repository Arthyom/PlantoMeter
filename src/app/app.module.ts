import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TutorialPage } from '../pages/tutorial/tutorial';
import {SlidePage} from '../pages/slide/slide';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import { Toast } from '@ionic-native/toast/ngx';



@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TutorialPage,
    SlidePage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    TutorialPage,
    SlidePage
  ],
  providers: [
    StatusBar,
    AlertController,
    SplashScreen,
    BluetoothSerial,
    InAppBrowser,
    Toast,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
