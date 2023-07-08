import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { StudentDTO } from './student.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private http:HttpClient) { }

  getSteudents():Observable<StudentDTO[]>{
    return this.http.get<StudentDTO[]>('http://localhost:3000/student')
  }
}
