import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { from } from 'rxjs';
import { TodoComponent } from './todo/todo.component';
import { AboutComponent } from './about/about.component';
import { WelcomeComponent } from './welcome/welcome.component';



const routes: Routes = [
  {path:'', component:WelcomeComponent},
  {path:"todo", component:TodoComponent},
  {path:"about", component:AboutComponent}
];

@NgModule({
  imports: [
  
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
