import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
// import { request } from 'http';
// import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor() { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    let username = "admin";
    let password = "admin";
    let BasicAuthString = "Basic "+window.btoa(username+":"+password);
    request = request.clone({
      setHeaders : {
        Authorization : BasicAuthString
      }
    })

    return next.handle(request);
  }

}
