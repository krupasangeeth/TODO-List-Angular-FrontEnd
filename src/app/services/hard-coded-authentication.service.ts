import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HardCodedAuthenticationService {

  constructor() { }
  authenticate(username : string,password : String){
    console.log('before' + this.isUserLogin());
    if(username === 'default' && password === 'default'){
      sessionStorage.setItem('AuthenticatedUser',username);
      console.log('after ' + this.isUserLogin());
      return true;
    }
    return false; 
  }
  isUserLogin(){
    let user = sessionStorage.getItem('AuthenticatedUser');
    return (user !== null)
  }
  userLogout(){
    sessionStorage.removeItem('AuthenticatedUser');
  }
}
