import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import {Storage, LocalStorage} from 'ionic-angular';

/*
  ConfigService:
  Este servicio maneja los datos de configuración de la aplicación
*/
@Injectable()
export class ConfigService {

  local: Storage = new Storage(LocalStorage);

  constructor(private http: Http) {
    
  }

  // getCoopByNum
  // realiza una llamada al servidor central (ariagro.myariadna.com)
  // con el número de cooperativa para obtener sus datos de conexión.
  // devuelve un observable que resolverá el llamante
  getCoopByNum(num:number){
    this.local.get('cfg').then(cfg = > {
      return cfg;
    }).catch(err=>{
      // how to handle error?
    });

  }

  // getConfig
  // obtiene la configuración desde el almacenamiento local
  getConfig(){

  }

  // setConfig
  // graba la configuración en el almacenamiento local
  setConfig(config){
    this.local.set('cfg', config);
  }

}

