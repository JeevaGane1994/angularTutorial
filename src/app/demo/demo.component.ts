import { Component, DoCheck, OnInit } from '@angular/core';
import { StudentsService } from '../students.service';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit, DoCheck {

  value = 1;
  multplier = 1;
  answerfromOne = 0
  data:any = [
    //  {name: 'Jeeva', std:'1', blood:'b+'},
    // {name: 'Akil', std:'2', blood:'A+'},
    // {name: 'Mahesh', std:'3', blood:'O+'}
  ];
  

  constructor(private sservice:StudentsService) { }

  ngOnInit() {

 this.sservice.getStudentsData().subscribe(res=>{
  this.data = res;
 })
  }


  displayAnswer(ans) {
    this.answerfromOne = ans;
  }


  ngDoCheck() {
    if (this.answerfromOne > 10) {
      alert('Answer is above 10')
    }
  }



   animateDiv(element){

    element.style.color ='red';
   
     }

}
