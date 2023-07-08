import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './features/home/home.component';
import { StudentComponent } from './features/student/student.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'student-list', component: StudentComponent }

];



@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
