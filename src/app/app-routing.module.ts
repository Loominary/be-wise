import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoursesComponent } from './courses/courses.component';
import { LecturersComponent } from './lecturers/lecturers/lecturers.component';

const routes: Routes = [

  {path: 'lecturers-component', component:LecturersComponent},
  {path: 'courses-component', component:CoursesComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
