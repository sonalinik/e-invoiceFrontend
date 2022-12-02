import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import 'rxjs/Rx';
import { HttpClient } from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import { HttpHeaders } from '@angular/common/http'; 
// import { JwtHelperService } from '@auth0/angular-jwt';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  base_url  =  environment.base_url;
  
  constructor(private http: HttpClient) { }

  login(article: any): Observable<any> {
    console.log(this.base_url);
    let httpHeaders = new HttpHeaders({
    'Content-Type' : 'application/json',
    'Cache-Control': 'no-cache'
      });    
      let options = {
      headers: httpHeaders
      };        
      return this.http.post<any>(this.base_url+'/login', article, options);
    } 

    resetPassword(data :any):Observable<any>{
      return this.http.post<any>(this.base_url+'/user-defination/resetpassword', data);
    }

    logout(id:any):Observable<any>{
      return this.http.post<any>(this.base_url+'/user-defination/logout',{id:id});
    }
  }
