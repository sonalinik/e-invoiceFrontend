import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class DoorgroupService {
  DoorGroup = new Array();
  // API 
  //// companynamelist"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  public getCompanyNamelist() {
    this.DoorGroup = []
    return this.http.get<any>(this.url + '')
    .pipe(map(ele => {
      ele.forEach(element => {
        let obj = { label: element.COMPANY_NAME, value: element.COMPANY_ID };
        this.DoorGroup.push(obj)
      });
      return this.DoorGroup;
    }));
}
}
