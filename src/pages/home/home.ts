import { Component } from '@angular/core';
<<<<<<< HEAD
import { NavController } from 'ionic-angular';
=======
import { NavController, ModalController} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
>>>>>>> feature/newLayOut

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

<<<<<<< HEAD
  constructor(public navCtrl: NavController) {

  }

=======
  constructor(public navCtrl: NavController,
     public modalController: ModalController, 
     ) {

  }

  // show tutorial page
  showTutorial() {
    let modal = this.modalController.create(TutorialPage);
    modal.present();
  }
  
>>>>>>> feature/newLayOut
}
