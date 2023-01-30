import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HellowWorldData, WelcomeDAOService } from '../services/DAO/welcome-dao.service';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  user = '';
  WelcomeMessage : String | undefined;
  constructor(
    private route : ActivatedRoute,
    private service : WelcomeDAOService
    ) { }
  message1 = 'Message is printing';
 
  ngOnInit(): void {
    this.user = this.route.snapshot.params['name'];
  }
  getDBDetails(){
    console.log(this.service.getWelcomedata());
    this.service.getWelcomedata().subscribe(
      response => this.handleResponseFromDB(response),
      error => this.handleException(error)
    );
  }
  getWelcomedatawithParameters(){
    console.log(this.service.getWelcomedatawithParameters(this.user));
    this.service.getWelcomedatawithParameters(this.user).subscribe(
      response => this.handleResponseFromDB(response),
      error => this.handleException(error)
    );
  }

  handleResponseFromDB(response : HellowWorldData){
    console.log(response.message);
    this.WelcomeMessage = response.message;
  }
  handleException(error: { error: { message: String | undefined; }; }){
    this.WelcomeMessage = error.error.message;
  }

}
