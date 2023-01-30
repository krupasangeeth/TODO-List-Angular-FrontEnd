import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToDoDataService } from '../services/DAO/to-do-data.service';

export class ToDo{
  constructor(
    public id : number,
    public description : string,
    public status : boolean,
    public date : Date
  ){

  }
}


@Component({
  selector: 'app-list-to-do',
  templateUrl: './list-to-do.component.html',
  styleUrls: ['./list-to-do.component.css']
})



export class ListToDoComponent implements OnInit {

  message : String | undefined;
  todos : ToDo[] | undefined;
  // = [

  //   new ToDo(1,'Reading a Book',false, new Date()),
  //   new ToDo(1,'Learn to Dance',false, new Date()),
  //   new ToDo(1,'Eating Food',false, new Date())

  //   // {id : 1, description : 'Reading a Book' },
  //   // {id : 2, description : 'Learn to Dance'},
  //   // {id : 3, description : 'Eating Food'}
  // ];
  constructor(
    private todoService : ToDoDataService,
    private router : Router
  ) { }

  ngOnInit(): void {
    this.refreshTods();
  }

  refreshTods(){
    this.todoService.getTodoData('krupa').subscribe(
      response=>{
        console.log(response);
        this.todos = response;
    });
  }

  deleteTodo(id: any){
    this.todoService.deleteTodo('krupa',id).subscribe(
      response => {
        console.log(response);
        this.message = "Selected TODO is Deleted "
        this.refreshTods();
      }
    )
  }
  updateTodo(id : any){
    // console.log(`Update todo with id ${id}`);
    this.router.navigate(['todos',id]);
  }

  addTodo(){
    this.router.navigate(['todos',-1]);
  }

}
