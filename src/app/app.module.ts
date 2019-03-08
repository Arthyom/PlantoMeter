import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
<<<<<<< HEAD
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
=======
import { IonicApp, IonicErrorHandler, IonicModule, AlertController } from 'ionic-angular';
>>>>>>> feature/newLayOut
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
<<<<<<< HEAD
=======
import { TutorialPage } from '../pages/tutorial/tutorial';
>>>>>>> feature/newLayOut

@NgModule({
  declarations: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
    HomePage,
    TutorialPage
>>>>>>> feature/newLayOut
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
<<<<<<< HEAD
    HomePage
=======
    HomePage,
    TutorialPage
>>>>>>> feature/newLayOut
  ],
  providers: [
    StatusBar,
    AlertController,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
