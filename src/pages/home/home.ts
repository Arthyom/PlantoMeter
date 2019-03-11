import { Component } from '@angular/core';
import { NavController, ModalController, Slides} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';
import {SlidePage} from '../slide/slide';

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
    let modal = this.modalController.create(SlidePage);
    modal.present();
  }

  // enable bluetooth and read data from arduino
  enableBlueThoot(){
    
    //show blueetooth seting
    this.blueTooth.showBluetoothSettings();

    /// enable bluetooth 
    this.blueTooth.enable();

    // read data from arduino
    this.blueTooth.read().then((data:any)=>{
      console.log(data);
    });
  }
}
