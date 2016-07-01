import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  CentralService:
  Accede al servidor central para obtener los parámetros de una determinada
  cooperativa.
*/
@Injectable()
export class CentralService {
  CENTRAL_URL: string = 'http://ariagro.myariadna.com:9901/api/parametros/';

  constructor(private http: Http) {
  }

  getCentral(numCoope) {
    return new Promise((resolve, reject) => {
      this.http.get(this.CENTRAL_URL + numCoope)
        .map(res => res.json())
        .subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
    });
  }
}

