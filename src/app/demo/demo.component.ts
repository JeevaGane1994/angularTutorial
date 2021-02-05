import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent  {
  total = 0;
  employeeName = 'mahesh';
  //USE CAN USE IN HTML BY USING {{}},
  //U CAN USE EVERYWHERE IN COMPONENT USING this.
  //IF U CHANGE THE GLOBAL VALUE IN TS THEN IT WILL IMMEDIATELY REFLECT IN HTML
  displayName = false;
  names = ['jeeva', 'akil', 'mahesh', 'raghav'];

  todaysDate = 454.787878565656565614 ;
  
  constructor() {


    console.log(this.todaysDate)
   }
 

  toggleName(){
    this.displayName = !this.displayName;
  }


  //NO NEED OF FUNCTION KEYWORD
  add(){ 
    this.total = this.total+1;
  }
 
  sub(){
    this.total = this.total-1;






    let obj = "{'a':1,'b':2}"
  }
  




  
}
 