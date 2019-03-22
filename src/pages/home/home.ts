import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  currentPlantState:string = "Saludable";
  currentFstPhrase:string = 'Estoy bien';
  currentHmdLevel:number = 3;


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

  // set phrases acording to the humedity level
  setPhrases(level){
    switch (level) {
      case '5': this.currentPlantState = 'Muy Seco'; break;
      case '4': this.currentPlantState = 'Seco'; break;
      case '3': this.currentPlantState = 'Saludable'; break;
      case '2': this.currentPlantState = 'Mojado'; break;
      case '1': this.currentPlantState = 'Muy Mojado'; break;

      default: this.currentPlantState = 'Desconocido'; break;
    }
  }

  // enable bluetooth and read data from arduino
  enableBlueThoot(){
    /// enable bluetooth 
    this.blueTooth.isEnabled().then(()=>{
      // check if bt is conbected 
      this.blueTooth.isConnected().then(()=>{
        // subscribe to the rawdata
        this.blueTooth.subscribeRawData().subscribe((data)=>{
          // read the data as a string
          this.blueTooth.read().then((data:string)=>{
            // split the string by ;
            let humedityLevel = data.split(';');
            // set phrase acording the humedity level
            this.setPhrases(humedityLevel[1]);
        });
      });
    // if the bt is not enabled
    }).catch(()=>{
        // connect to the indicated mac id
        this.blueTooth.connect("98:D3:31:60:22:49").subscribe();
      });
    });
  } 
}
