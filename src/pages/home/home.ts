import { Component } from '@angular/core';
import { NavController, ModalController, Slides} from 'ionic-angular';
import { TutorialPage } from '../tutorial/tutorial';
import {BluetoothSerial} from '@ionic-native/bluetooth-serial';
import {SlidePage} from '../slide/slide';
import { InAppBrowser } from '@ionic-native/in-app-browser/ngx';
import {Platform} from 'ionic-angular';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  // define json objects that represents the various plant states
  plantStates = {
    "muyseco"  : {"fraseTitulo": "Muy Seco"  , "frasePrimaria": "¡Me Quemo!"   , "fraseSecundaria": "¡Riegame por favor!"    , "img":"assets/imgs/mS.png",    'color': 'danger',    'hlevel':5},
    "seco"     : {"fraseTitulo": "Seco"      , "frasePrimaria": "¡Que Calor!"  , "fraseSecundaria": "¿Puedes Regarme?"       , "img":"assets/imgs/medio.png", 'color': 'lessDanger','hlevel':4},
    "saludable": {"fraseTitulo": "Saludable" , "frasePrimaria": "¡Estoy Super!", "fraseSecundaria": "¡Bien Hecho, Te Quiero!", "img":"assets/imgs/Salp.png",  'color': 'secondary', 'hlevel':3},
    "mojado"   : {"fraseTitulo": "Mojado"    , "frasePrimaria": "¡Que Humedo!" , "fraseSecundaria": "Suficiente Agua"        , "img":"assets/imgs/medio.png", 'color': 'lessPrimry','hlevel':2},
    "muyMojado": {"fraseTitulo": "Muy Mojado", "frasePrimaria": "¡Me Ahogo!"   , "fraseSecundaria": "¡Quitame Agua!"         , "img":"assets/imgs/mM.png",    'color': 'primary',   'hlevel':1},
    "desconocd": {"fraseTitulo": "Desconocido", "frasePrimaria": "¿?"   , "fraseSecundaria": "¿?", "img":"", 'color': 'dark', 'hlevel':0}
  }
  
  // set global variables
  currentPlantState: string = this.plantStates.saludable.fraseTitulo;
  currentTempState          = 30.0;
  currentHumidity           = 120;
  generalColor: string      = this.plantStates.saludable.color;
  conectState:string        = 'Desconectado';
  imgState:string           = this.plantStates.saludable.img;
  secPhrase:string          = this.plantStates.saludable.fraseSecundaria;
  priPhrase:string          = this.plantStates.saludable.frasePrimaria;
  hlevel                    = this.plantStates.saludable.hlevel;


  constructor(public navCtrl: NavController,
     public modalController: ModalController, 
     public blueTooth: BluetoothSerial,
     public iab: InAppBrowser,
     public plat: Platform
     ) {

  }

  // open survey in browser
  openSurvey(){
    const browser = this.iab.create('https://docs.google.com/forms/d/e/1FAIpQLSeS-M59NjQHjKPGRYfwd-pS3UE8Om6QrhiaVtBVkwudR6TRQQ/viewform?fbclid=IwAR0STHs8Z8jo_ogbTMB_CBlX2fEpZp5SRBVpTvAl4D6mZN4At9cFyzsQV40');
    try{
      browser.show();
    }
    catch(exp){
      browser.close();
    }
  }

  // override life cicle ionic pages
  ionViewDidLoad(){
    this.showTutorial();
  }

  // show tutorial page
  showTutorial() {
    let modal = this.modalController.create(SlidePage);
    modal.present();
  }

  closeApplication(){
    // shut down bt
    this.blueTooth.disconnect();

    // exit from app
    this.plat.exitApp();
  }

  // set phrases acording to the humedity level
  setPhrases(level){
    switch (level) {
      case '5': 
        this.currentPlantState = this.plantStates.muyseco.fraseTitulo; 
        this.imgState          = this.plantStates.muyseco.img;
        this.generalColor      = this.plantStates.muyseco.color;
        this.priPhrase         = this.plantStates.muyseco.frasePrimaria;
        this.secPhrase         = this.plantStates.muyseco.fraseSecundaria;
        this.hlevel            = this.plantStates.muyseco.hlevel;
      break;

      case '4': 
        this.currentPlantState = this.plantStates.seco.fraseTitulo; 
        this.imgState          = this.plantStates.seco.img;
        this.generalColor      = this.plantStates.seco.color;
        this.priPhrase         = this.plantStates.seco.frasePrimaria;
        this.secPhrase         = this.plantStates.seco.fraseSecundaria;
        this.hlevel            = this.plantStates.seco.hlevel;
      break;

      case '3':
        this.currentPlantState = this.plantStates.saludable.fraseTitulo; 
        this.imgState          = this.plantStates.saludable.img;
        this.generalColor      = this.plantStates.saludable.color;
        this.priPhrase         = this.plantStates.saludable.frasePrimaria;
        this.secPhrase         = this.plantStates.saludable.fraseSecundaria;
        this.hlevel            = this.plantStates.saludable.hlevel;
      break;

      case '2': 
        this.currentPlantState = this.plantStates.mojado.fraseTitulo; 
        this.imgState          = this.plantStates.mojado.img;
        this.generalColor      = this.plantStates.mojado.color;
        this.priPhrase         = this.plantStates.mojado.frasePrimaria;
        this.secPhrase         = this.plantStates.mojado.fraseSecundaria;
        this.hlevel            = this.plantStates.mojado.hlevel;
      break;

      case '1': 
        this.currentPlantState = this.plantStates.muyMojado.fraseTitulo; 
        this.imgState          = this.plantStates.muyMojado.img;
        this.generalColor      = this.plantStates.muyMojado.color;
        this.priPhrase         = this.plantStates.muyMojado.frasePrimaria;
        this.secPhrase         = this.plantStates.muyMojado.fraseSecundaria;
        this.hlevel            = this.plantStates.muyMojado.hlevel;
      break;

      default:
        this.currentPlantState = this.plantStates.desconocd.fraseTitulo; 
        this.imgState          = this.plantStates.desconocd.img;
        this.generalColor      = this.plantStates.desconocd.color;
        this.priPhrase         = this.plantStates.desconocd.frasePrimaria;
        this.secPhrase         = this.plantStates.desconocd.fraseSecundaria;
        this.hlevel            = this.plantStates.desconocd.hlevel;
      break;
    }
  }

  // enable bluetooth and read data from arduino
  enableBlueThoot(){
    /// enable bluetooth 
    this.blueTooth.isEnabled().then(()=>{
      // check if bt is conbected 
      this.blueTooth.isConnected().then(()=>{
        // set conectState to conected
        this.conectState = 'Conectado';
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
    }).catch(()=>{
      this.conectState = 'Desconectado';
      this.setPhrases(0);
    });
  } 
}
