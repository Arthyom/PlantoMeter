import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ViewController  } from 'ionic-angular';

/**
 * Generated class for the SlidePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-slide',
  templateUrl: 'slide.html',
})
export class SlidePage {

  constructor(public navCtrl: NavController, 
    public navParams: NavParams,
    public viewController: ViewController
    ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SlidePage');
  }

  closeTutorialSlides(){
    this.viewController.dismiss();
  }


}
