import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ConfigService} from '../../providers/config-service/config-service';

@Component({
  templateUrl: 'build/pages/home/home.html',
  providers: [ConfigService]
})
export class HomePage {
  myCfg;

  constructor(private navController: NavController, private cfgs: ConfigService) {

  }

  leerConfiguracion(){
    this.cfgs.getConfig().then(c => {
      if (!c){
        console.log('No hay config');
      }else{
        console.log('Si que la hay: ' + c);
      }
    }).catch(err => {
      console.log("Err: " + err);
    });
  }

  guardarConfiguracion(){
    this.myCfg = {
      v1: "valor 1",
      v2: "valor 2"
    };
    this.cfgs.setConfig(this.myCfg).then(r => {
      console.log('Configuración guardada');
    }).catch(err => {
      console.log("Err: " + err);
    });
  }

}
