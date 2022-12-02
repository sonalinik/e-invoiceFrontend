import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpEvent, HttpResponse, HttpRequest, HttpHandler } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ConnectionService } from 'ng-connection-service';



@Injectable({
    providedIn: 'root'
})
export class AuthInterceptorServices implements HttpInterceptor {
    isConnected = true;
    noInternetConnection: boolean;

    constructor(private connectionService: ConnectionService) { }

    intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        this.connectionService.monitor().subscribe(isConnected => {
            this.isConnected = isConnected;
            if (this.isConnected) {
                this.noInternetConnection = false;
                const token: string = localStorage.getItem('token');

                if (token) {
                    request = request.clone({ headers: request.headers.set('Authorization', 'Bearer ' + token) });
                }

                if (!request.headers.has('Content-Type')) {
                    request = request.clone({ headers: request.headers.set('Content-Type', 'application/json') });
                }

                request = request.clone({ headers: request.headers.set('Accept', 'application/json') });

                return next.handle(request).pipe(
                    map((event: HttpEvent<any>) => {
                        if (event instanceof HttpResponse) {
                            // console.log('event--->>>', event);
                        }
                        return event;
                    }));
            }
            else {
                this.noInternetConnection = true;
                alert('please check internet conntion')
                return
            }
        
        })
        return
    }
}