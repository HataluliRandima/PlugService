//import { HttpInterceptor } from '@angular/common/http';
import { Injectable,Injector } from '@angular/core';
//import { Injectable, Injector } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HttpResponse } from '@angular/common/http';
import { AuthService } from '../services/auth.service';
import { catchError, Observable, throwError, BehaviorSubject, switchMap, filter, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TokenInterceptorService implements HttpInterceptor {

  constructor(private inject: Injector) { }
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    let authservice = this.inject.get(AuthService);
    let authreq = request;
    authreq = this.AddTokenheader(request, authservice.GetToken());
    return next.handle(authreq).pipe(
      catchError(errordata => {
        if (errordata.status === 401) {
          // need to implement logout
          authservice.Logout();
          // refresh token logic
        //  return this.handleRefrehToken(request, next);
        }
        return throwError(errordata);
      })
    );

  }
  AddTokenheader(request: HttpRequest<any>, token: any) {
    return request.clone({ headers: request.headers.set('Authorization', 'bearer ' + token) });
  }
}
