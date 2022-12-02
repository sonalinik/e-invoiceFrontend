import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import { environment } from '../../../../environments/environment';
@Injectable({
  providedIn: 'root'
})
export class FillerMasterService {
  // Variable for handleError
  [x: string]: any;
  // API 
  url = environment.base_url;

  constructor(private http: HttpClient) { }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/login/insert/testing', data)
  }

  getFormData(): Observable<any> {
    return this.http.get(this.url + '/login/length').pipe(catchError(this.handleError));
  }

  getedit(data: any): Observable<any> {
    return this.http.post(this.url + '/login/existing/testing' , data).pipe(catchError(this.handleError));
  }
  getupdate(data: any): Observable<any> {
    return this.http.post(this.url + '/login/update/testing', data)
  }


  
}
