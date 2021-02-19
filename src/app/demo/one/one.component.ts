import { Component, EventEmitter, Input, OnInit, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-one',
  templateUrl: './one.component.html',
  styleUrls: ['./one.component.css']
})
export class OneComponent implements OnInit {


  @Input() value;
  @Input() mul;


  multiplyingValue;
  multi;

  @Output() answer = new EventEmitter()


  
  constructor() { }

  ngOnInit(): void {
  }




  ngOnChanges(changes: SimpleChanges) {
    if(changes.value){
        this.multiplyingValue = changes.value.currentValue;
    }
    else{
       this.multi = changes.mul.currentValue;
    }

        this.calculate( this.multiplyingValue, this.multi);
  }




  calculate(value, mul){
    const ans = value * mul;
    this.answer.emit(ans)

  }

}
