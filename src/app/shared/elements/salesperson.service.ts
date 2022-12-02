import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class SalespersonService {
  SalePersonObject = new Array();
  // API 
  //// salesperson list"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  
  public get SalePersonlist() {
    this.SalePersonObject = []
    return this.http.get<any>(this.url + '')
    .pipe(map(ele => {
      ele.forEach(element => {
        let obj = { label: element.NAME, value: element.id };
        this.SalePersonObject.push(obj)
      });
      return this.SalePersonObject;
    }));
}
}
