import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public modalController: ModalController, 
     public blueTooth: BluetoothSerial
     ) {

  }

  // show tutorial page
  showTutorial() {
    let modal = this.modalController.create(TutorialPage);
    modal.present();
  }

  enableBlueThoot(){
    this.blueTooth.enable();
  }
  
}
