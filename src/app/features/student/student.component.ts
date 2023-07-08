import { Component, OnInit } from '@angular/core';
import { StudentService } from './student.service';
import { StudentDTO } from './student.model';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {
  students:StudentDTO[]=[]
  constructor(private studentService:StudentService){

  }
  ngOnInit(): void {
    this.studentService.getSteudents().subscribe((res:StudentDTO[])=>{
      this.students=res;
    })
  }


}
