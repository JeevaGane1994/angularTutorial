import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }



getStudentsData(){
  const apidata = this.http.get('http://locathost:8000/getStudentData') 
  return  apidata;
}

}
