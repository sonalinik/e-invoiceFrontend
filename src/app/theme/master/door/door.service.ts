import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root'
})
export class DoorService {
  // Variable for handleError
  [x: string]: any;
  //API
  url = environment.base_url;
  url2 = environment.base_url2;
  constructor(private http: HttpClient) { }
  // for length
  getFormData(): Observable<any> {
    return this.http.get(this.url + '/MSTDOORTYPEBOM/length').pipe(catchError(this.handleError));
  }
  //Insertion Operation
  postData(data: any): Observable<any> {
    return this.http.post(this.url + '/login/door/insert/testing', data)
  }
  getedit(CODE: any): Observable<any> {
    return this.http.post(this.url + '/MSTDOORTYPEBOM/getSingleRecord/', CODE).pipe(catchError(this.handleError));
  }
  getupdate(data: any): Observable<any> {
    return this.http.post(this.url + '/MSTDOORTYPEBOM/update', data)
  }
  getdelete(data: any): Observable<any> {
    return this.http.post(this.url + '/MSTDOORTYPEBOM/delete', data)
  }

  getDescription(dbobj): Observable<any> {
    return this.http.get(this.url + '/measurementsheet/materialName/new/' + dbobj).pipe(catchError(this.handleError));
  }

  getReport(): Observable<any> {
    return this.http.get(this.url2).pipe(catchError(this.handleError));
  }
}
