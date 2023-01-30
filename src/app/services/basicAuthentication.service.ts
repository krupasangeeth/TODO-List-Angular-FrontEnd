import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeBasicAuthenticationService(username: any,password: any){

    let BasicAuthString = "Basic "+window.btoa(username+":"+password);
    // let BasicAuthString = "Basic "+username+":"+password;
    let header = new HttpHeaders({
      Authorization : BasicAuthString
    })
    return this.http.get<AuthenticationBean>(`http://localhost:8080/basicauth`, {headers : header})
    .pipe(
      map(
        data=>{
          sessionStorage.setItem('AuthenticatedUser',username);
          sessionStorage.setItem('token',BasicAuthString);
          return data;
        }
      )
    );
  }

  createBasicAuthenticationHeader(){
 
  }

  // getAuthenticatedUser(){
  //   return sessionStorage.getItem('AuthenticatedUser');
  // }

  // getAuthenticatedToken(){
  //   if(this.getAuthenticatedUser())
  //     return  sessionStorage.getItem('token');
  // }


  isUserLogin(){
    let user = sessionStorage.getItem('AuthenticatedUser');
    return (user !== null)
  }
  userLogout(){
    sessionStorage.removeItem('AuthenticatedUser');
  }
}

export class AuthenticationBean{
  constructor(public message : string){

  }
}
