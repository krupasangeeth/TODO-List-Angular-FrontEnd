import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {map} from 'rxjs/operators';
import { APT_URL} from '../app.constants';


export const TOKEN = 'token';
export const AUTHENTICATED_USER = 'AuthenticatedUser';

@Injectable({
  providedIn: 'root'
})


export class BasicAuthenticationService {

  constructor(private http : HttpClient) { }

  executeBasicAuthenticationService(username: any,password: any){

    // let BasicAuthString = "Basic "+window.btoa(username+":"+password);
    let BasicAuthString = username;
    let header = new HttpHeaders({
      Authorization : BasicAuthString
    })
    return this.http.get<AuthenticationBean>(`${APT_URL}/basicauth`, {headers : header})
    .pipe(
      map(
        data=>{
          sessionStorage.setItem(AUTHENTICATED_USER,username);
          sessionStorage.setItem(TOKEN,BasicAuthString);
          return data;
        }
      )
    );
  }

  createBasicAuthenticationHeader(){
 
  }

  getAuthenticatedUser(){
    return sessionStorage.getItem(AUTHENTICATED_USER);
  }

  getAuthenticatedToken(){
    if(this.getAuthenticatedUser())
      return  sessionStorage.getItem(TOKEN);
    return "";
  }


  isUserLogin(){
    let user = sessionStorage.getItem(AUTHENTICATED_USER);
    return (user !== null)
  }
  userLogout(){
    sessionStorage.removeItem(AUTHENTICATED_USER);
    sessionStorage.removeItem(TOKEN);
  }
}

export class AuthenticationBean{
  constructor(public message : string){

  }
}
