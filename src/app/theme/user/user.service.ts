import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import Swal from 'sweetalert2';
import {environment}  from '../../../environments/environment'
@Injectable({
  providedIn: 'root'
})
export class UserService {
  url = environment.base_url;
  constructor(private http: HttpClient) { }

  //Insertion Operation
  updateUser(data: any): Observable<any> {
    return this.http.post(this.url + '/user-defination/update_user', data).pipe(map((res) => res),
        catchError((error) => {
            return throwError(error);
        })
    )
  }

  //get login user data
  getUserDetails(id:number):Observable<any>{
    return this.http.get(this.url + '/user-defination/'+id).pipe(map((res)=>res),
    catchError((error)=>{
      Swal.fire(error.error.message);
            return throwError(error);
    }))
  }

  //get login user data
  editlocal(id:number):Observable<any>{
    return this.http.get(this.url + '/user-defination/localData/'+id).pipe(map((res)=>res),
    catchError((error)=>{
      Swal.fire(error.error.message);
            return throwError(error);
    }))
  }
}


