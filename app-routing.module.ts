import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TaskviewComponent } from './pages/taskview/taskview.component';
import { NewlistComponent } from './newlist/newlist.component';
import { NewtaskComponent } from './newtask/newtask.component';
import { EditlistComponent } from './editlist/editlist.component';
import { EdittaskComponent } from './edittask/edittask.component';

const routes: Routes = [
  { path:"", redirectTo:'/lists', pathMatch:'full'},
  { path:'lists', component:TaskviewComponent},
  { path : 'new-list', component:NewlistComponent},
  { path:'new-list/:presentid', component:NewlistComponent},
  { path:'new-task/:listid', component:NewtaskComponent},
  { path:'edit-list/:listid', component:EditlistComponent},
  { path:'lists/:listid/edit-task/:taskid', component:EdittaskComponent},
  { path:'lists/:listid', component:TaskviewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [TaskviewComponent, NewlistComponent, NewtaskComponent, EditlistComponent, EdittaskComponent]