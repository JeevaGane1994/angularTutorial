import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  constructor(private router:Router,private dataservice:CommonService) { }

  ngOnInit(): void {
  }


  displayData(data) {
    this.dataservice.savedata(data).subscribe(res=>{

    })
            // this.router.navigate(['/login'])
 }

}
