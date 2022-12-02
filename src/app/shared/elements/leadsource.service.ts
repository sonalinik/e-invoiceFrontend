import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class LeadsourceService {
  LeadSourceObject = new Array();
  // API 
  //// lead source list"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  
  public get LeadSourcelist() {
    this.LeadSourceObject = []
    return this.http.get<any>(this.url + 'projectdefination/find')
    .pipe(map(ele => {
      ele.forEach(element => {
        let obj = { label: element.NAME, value: element.id };
        this.LeadSourceObject.push(obj)
      });
      return this.LeadSourceObject;
    }));
}
}
