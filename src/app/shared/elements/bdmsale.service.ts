import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BdmsaleService {
  BDMSaleObject = new Array();
  // API 
  //// customernamelist"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  public getCustomerNamelist() {
    this.BDMSaleObject = []
    return this.http.get<any>(this.url + '/projectdefination/find')
      .pipe(map(ele => {
        ele.forEach(element => {
          let obj = { label: element.NAME, value: element.COMPANY_ID };
          this.BDMSaleObject.push(obj)
          console.log(element)
        });
        return this.BDMSaleObject;
      }));
  }
}
