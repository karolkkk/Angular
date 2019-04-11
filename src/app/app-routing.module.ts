import { AboutComponent } from './about/about.component';
import { TeachersListComponent } from './teachers-list/teachers-list.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {path: 'teachers', component: TeachersListComponent},
  {path: 'about', component: AboutComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const routingComponents = [ TeachersListComponent, AboutComponent ]
