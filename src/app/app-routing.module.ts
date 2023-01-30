import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { ListToDoComponent } from './list-to-do/list-to-do.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGaurdService } from './services/route-gaurd.service';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path : '', component : LoginComponent},
  {path : 'login', component : LoginComponent},
  {path : 'welcome/:name', component : WelcomeComponent , canActivate : [RouteGaurdService]},
  {path : 'todo', component : ListToDoComponent , canActivate : [RouteGaurdService]},
  {path : 'logout', component : LogoutComponent , canActivate : [RouteGaurdService]},
  {path : 'todos/:id', component : TodoComponent , canActivate : [RouteGaurdService]},
  {path : '**' , component : ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
