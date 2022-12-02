import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { environment } from '../../../../environments/environment';
import Swal from 'sweetalert2';
catchError
@Injectable({
  providedIn: 'root'
})
export class TableService {

  [x: string]: any;
  url = environment.base_url;
  url1 = environment.base_url1;
  constructor(private http: HttpClient) { }

  getFormData(obj): Observable<any> {
    return this.http.post(this.url + '/login/get', obj).pipe(catchError(this.handleError));
  }

  BranchName(): Observable<any> {
    return this.http.get(this.url + '/login/find').pipe(catchError(this.handleError));
  }

  aspdatafetch():Observable<any>{
    return this.http.get(this.url1 + '/api/cards').pipe(catchError(this.handleError));
  }


}