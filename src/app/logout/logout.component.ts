import { Component, OnInit } from '@angular/core';
import { HardCodedAuthenticationService } from '../services/hard-coded-authentication.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(public hardCodedAutheticationService : HardCodedAuthenticationService) { }

  ngOnInit(): void {
    this.hardCodedAutheticationService.userLogout();
  }

}
