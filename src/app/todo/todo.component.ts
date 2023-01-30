import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToDo } from '../list-to-do/list-to-do.component';
import { ToDoDataService } from '../services/DAO/to-do-data.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

    id : number;
    todo : ToDo;

  constructor(
    private todoService : ToDoDataService,
    private route : ActivatedRoute,
    private router : Router
  ) {
      this.todo = new ToDo(0,"",false,new Date());
      this.id = 0;
   }

  ngOnInit(): void {

    this.id = this.route.snapshot.params['id'];
    if(this.id != -1 ){
      this.todoService.retriveTodo("krupa",this.id).subscribe(
        data => this.todo = data
      )
    }
   

  }
  updateTodo(){
    if(this.id === -1){
      this.todoService.updateTodo("krupa",this.id,this.todo).subscribe(
        data => {
          console.log(data);
          this.router.navigate(['todo']);
        }
      )
    }
   else{ 
    this.todoService.updateTodo("krupa",this.id,this.todo).subscribe(
      data => {
        console.log(data);
        this.router.navigate(['todo']);
      }
    )
  }
  }

}
