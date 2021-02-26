import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoServiceService {

  constructor(private http: HttpClient) { }



getData(){

  const apidata = this.http.get('http://localhost:8080/')    //get, post, put, deletee

  // const data = [
  //   {name: 'Jeeva', std:'1', blood:'b+'},
  //   {name: 'Akil', std:'2', blood:'A+'},
  //   {name: 'Mahesh', std:'3', blood:'O+'}

  // ]
  return  apidata;
}


getTableData(){

  const tableData = this.http.get('http://localhost:8080/getData')    //get, post, put, deletee
 
  return  tableData;
}



getAgeDetails(){
  const data =  this.http.get('http://localhost:8080/getAge')
  return data
}


}
