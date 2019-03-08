import { Component } from '@angular/core';
import { NavController, ModalController} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,
     public modalController: ModalController, 
     ) {

  }

  // show tutorial page
  showTutorial() {
    let modal = this.modalController.create(TutorialPage);
    modal.present();
  }
  
}
