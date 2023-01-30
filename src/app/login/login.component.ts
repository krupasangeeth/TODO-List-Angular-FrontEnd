import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../services/basicAuthentication.service';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  username = 'default';
  password = '';
  userErrorMessage = 'Invalid Credentials';
  inValidLogin = false;
  constructor(private router : Router,public hardCodedAuthenticationService : HardCodedAuthenticationService,
    private basicAuthenticationService : BasicAuthenticationService
    ) { }

  ngOnInit(): void {
    console.log("in login component");
  }
  handleLogin(){
   if(this.hardCodedAuthenticationService.authenticate(this.username,this.password)){
      this.router.navigate(['welcome',this.username]);
      this.inValidLogin = false;
   }else{
    this.inValidLogin = true;
   }
  }
  handleBasicAuthLogin(){
    this.basicAuthenticationService.executeBasicAuthenticationService(this.username,this.password).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['welcome',this.username]);
       this.inValidLogin = false;
      },
      error =>{
        console.log(error);
        this.inValidLogin = true;
      }
    )
      
   }

}
