import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit,OnDestroy{

  loginForm: FormGroup;

  constructor(private rout:Router, private cservice:CommonService) { }   

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      emailid: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      pwd: new FormControl("")
    });

  }

  onLogin() {
    const result = this.loginForm.valid; // valid, invalid, dirty, prstine, touchec, untoched
    const data = this.loginForm.value; //{emailid:'test@gmail.com', pwd:'admin'} 


    if (result) { 
      this.cservice.verifyCredentials(data).subscribe(res => {
        if(res == true){
        this.rout.navigate(['/book'])
        }
      }) 
    }



  }

  navigateToSignup(){
    this.rout.navigate(['/signup'])
  }

  ngOnDestroy(){
  
  }
}
