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
  getCoopByNum(num: number) {


  }

  // getConfig
  // obtiene la configuración desde el almacenamiento local
  getConfig() {
    return this.local.get('cfg');
  }

  // setConfig
  // graba la configuración en el almacenamiento local
  setConfig(config) {
    return this.local.set('cfg', JSON.stringify(config));
  }

}

