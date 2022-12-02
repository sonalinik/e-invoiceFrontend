import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { ConnectionService } from 'ng-connection-service';
import { Observable, Observer, fromEvent, merge } from 'rxjs';
import { map } from 'rxjs/operators';
import Swal from "sweetalert2";



@Injectable()
export class UserAuthInterceptor implements HttpInterceptor {


  constructor() {


  }
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.createOnline$().subscribe(async function (isOnline) {
      let data = await isOnline;
      if (data == false) {
        // Swal.fire("Warning!", "Please check your internet connection !", "warning");
        return false;
      }
    });
    let token = localStorage.getItem('token');
    req = req.clone({
      setHeaders: {
        "Content-Type": "application/json; charset=utf-8",
        Accept: "application/json",
        Authorization: `Bearer ${token}`,
      },
    });

    return next.handle(req);
  }

  ngOnInit() {
    this.createOnline$().subscribe(isOnline => console.log(isOnline));
  }

  createOnline$() {
    return merge<boolean>(
      fromEvent(window, 'offline').pipe(map(() => false)),
      fromEvent(window, 'online').pipe(map(() => true)),
      new Observable((sub: Observer<boolean>) => {
        sub.next(navigator.onLine);
        sub.complete();
      }));
  }
}
