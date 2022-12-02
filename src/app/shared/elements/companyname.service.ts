import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CompanynameService {
  CompanyNameObject = new Array();
  // API 
  //// companynamelist"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  
  public getCompanyNamelist() {
    this.CompanyNameObject = []
    return this.http.get<any>(this.url + '/projectdefination/findall')
    .pipe(map(ele => {
      ele.forEach(element => {
        let obj = { label: element.COMPANY_NAME, value: element.COMPANY_ID };
        this.CompanyNameObject.push(obj)
      });
      return this.CompanyNameObject;
    }));
}
}
