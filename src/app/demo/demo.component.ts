import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.css']
})
export class DemoComponent implements OnInit {
  total = 0;

  //USE CAN USE IN HTML BY USING {{}},
  //U CAN USE EVERYWHERE IN COMPONENT USING this.
  //IF U CHANGE THE GLOBAL VALUE IN TS THEN IT WILL IMMEDIATELY REFLECT IN HTML


  constructor() { }

  ngOnInit(): void {}


  //NO NEED OF FUNCTION KEYWORD
  add(){ 
    this.total = this.total+1;
  }
 
  sub(){
    this.total = this.total-1;
  }
  
}
 