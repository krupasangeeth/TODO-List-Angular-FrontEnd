import { HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BasicAuthenticationService } from '../basicAuthentication.service';
// import { request } from 'http';
// import { nextTick } from 'process';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorBasicAuthService implements HttpInterceptor{

  constructor(private basicAuthService : BasicAuthenticationService) { }

  intercept(request: HttpRequest<any>, next: HttpHandler){
    // let username = "admin";
    // let password = "admin";
    // let BasicAuthString = "Basic "+window.btoa(username+":"+password);
    let BasicAuthString = this.basicAuthService.getAuthenticatedToken();
    let username = this.basicAuthService.getAuthenticatedUser();
    if(BasicAuthString && username){
      request = request.clone({
        setHeaders : {
          Authorization : BasicAuthString
        }
      })
    }
   

    return next.handle(request);
  }

}
