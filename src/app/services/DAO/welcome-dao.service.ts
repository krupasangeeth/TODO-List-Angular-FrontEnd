import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

export class HellowWorldData{
  constructor(public message : String){}
}

@Injectable({
  providedIn: 'root'
})
export class WelcomeDAOService {

  constructor(
    private http : HttpClient
  ) { }

  getWelcomedata(){
    // let BasicAuthString = this.createBasicAuthenticationHeader();
    // let header = new HttpHeaders({
    //   Authorization : BasicAuthString
    // })
    return this.http.get<HellowWorldData>("http://localhost:8080/helloworldbean",
    // {headers : header}
    );
  }

  getWelcomedatawithParameters(name: string){
    let BasicAuthString = this.createBasicAuthenticationHeader();
    let header = new HttpHeaders({
      Authorization : BasicAuthString
    })
    return this.http.get<HellowWorldData>(`http://localhost:8080/hello/${name}`, {headers : header});
  }

  createBasicAuthenticationHeader(){
    let username = "admin";
    let password = "admin";
    let BasicAuthString = "Basic "+window.btoa(username+":"+password);
    return BasicAuthString;
  }

}
