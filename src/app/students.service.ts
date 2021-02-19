import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class StudentsService {

  constructor(private http: HttpClient) { }



getStudentsData(){

  const apidata = this.http.get('http://locathost:8000/getStudentData')

  // const data = [
  //   {name: 'Jeeva', std:'1', blood:'b+'},
  //   {name: 'Akil', std:'2', blood:'A+'},
  //   {name: 'Mahesh', std:'3', blood:'O+'}

  // ]
  return  apidata;
}

}
