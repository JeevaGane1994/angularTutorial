import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CommonService {

  constructor(private http: HttpClient) { }



  verifyCredentials(data){ //{emailid:'test@gmail.com', pwd:'admin'} 
  
    const apidata = this.http.post('http://localhost:8080/loginCheck', data)    //get, post, put, deletee 
    return  apidata;
  }

savedata(data){
  const apidata = this.http.post('http://localhost:8080/signup', data)    //get, post, put, deletee 
    return  apidata;
}

  
}
  


// get, post, put, delete

//get- no input but receive ouput
//post input,output
