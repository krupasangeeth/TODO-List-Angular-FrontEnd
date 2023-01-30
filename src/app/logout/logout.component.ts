import { Component, OnInit } from '@angular/core';
import { BasicAuthenticationService } from '../services/basicAuthentication.service';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardCodedAutheticationService : HardCodedAuthenticationService,
    public basicAuthService : BasicAuthenticationService) { }

  ngOnInit(): void {
    this.hardCodedAutheticationService.userLogout();
    this.basicAuthService.userLogout();
  }

}
