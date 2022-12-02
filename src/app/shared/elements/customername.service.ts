import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
// Used to Call API
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomernameService {
  CustomerNameObject = new Array();
  // API 
  //// customernamelist"; 
  url = environment.base_url;

  constructor(private http: HttpClient) { }

  public getCustomerNamelist(data) {
    this.CustomerNameObject = []
    return this.http.post(this.url + '/projectdefination/find', data)

  }

}
