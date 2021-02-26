import { Component, DoCheck, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';
import { DemoServiceService } from './demo-service.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {

  value = 1;
  multplier = 1;
  answerfromOne = 0
  details:any = [ ]


  constructor(private dservice:DemoServiceService) { }

  ngOnInit() {

 this.dservice.getAgeDetails().subscribe((res:any)=>{
   this.details = res.data;
 
 })

} 









}
