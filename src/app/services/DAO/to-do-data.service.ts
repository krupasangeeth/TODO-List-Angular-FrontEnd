import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToDo } from 'src/app/list-to-do/list-to-do.component';
import { WelcomeDAOService } from './welcome-dao.service';

@Injectable({
  providedIn: 'root'
})
export class ToDoDataService {

  constructor(private http : HttpClient,
              private todoService : WelcomeDAOService          
    ) { }


  getTodoData(name: string){
    // let BasicAuthString = this.todoService.createBasicAuthenticationHeader();
    // let header = new HttpHeaders({
    //   Authorization : BasicAuthString
    // })

    return this.http.get<ToDo[]>(`http://localhost:8080/users/${name}/todos`);
  }

  deleteTodo(name : String, id: any ){
    return this.http.delete(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  retriveTodo(name : String, id: any ){
    return this.http.get<ToDo>(`http://localhost:8080/users/${name}/todos/${id}`)
  }

  updateTodo(name : String, id: any , todo : ToDo){
    return this.http.put(`http://localhost:8080/users/${name}/todos/${id}`,todo);
  }

  createTodo(name : String, todo : ToDo){
    return this.http.put(`http://localhost:8080/users/${name}/todos`,todo);
  }

}
