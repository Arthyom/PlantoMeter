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

  // define json objects that represents the various plant states
  plantStates = {
    "muyseco"  : {"fraseTitulo": "" , "frasePrimaria": "", "fraseSecundaria": "", "img":""},
    "seco"     : {"fraseTitulo": "" , "frasePrimaria": "", "fraseSecundaria": "", "img":""},
    "saludable": {"fraseTitulo": "" , "frasePrimaria": "", "fraseSecundaria": "", "img":""},
    "mojado"   : {"fraseTitulo": "" , "frasePrimaria": "", "fraseSecundaria": "", "img":""},
    "muyMojado": {"fraseTitulo": "" , "frasePrimaria": "", "fraseSecundaria": "", "img":""}
  }
  
  currentPlantState: string = "Saludable";
  currentTempState          = 30.0;
  currentHumidity           = 120;
  generalColor: string      = 'secondary'

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
