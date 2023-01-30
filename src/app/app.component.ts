import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 

  title = 'ToDo';
  message = "How are you";
  constructor(){
    console.log("app component")
  }

}
