import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms'; 
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(private rout:Router) { }   

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
      if (data.emailid == 'test@gmail.com' && data.pwd === 'admin') {
      this.rout.navigate(['/pages/dashboard'])
      }
    }
  }

  navigateToSignup(){
    this.rout.navigate(['/signup'])
  }

}
