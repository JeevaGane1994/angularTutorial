import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent  implements OnInit {

  loginForm:FormGroup; 

  constructor() { }

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
    const result = this.loginForm.valid // valid, invalid, dirty, prstine, touchec, untoched
    console.log(result);
  }

}
