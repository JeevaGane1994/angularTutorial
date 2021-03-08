import { Component, DoCheck, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { CommonService } from '../common.service';
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
  details: any = []



  farmerDetails;
  constructor(private dservice: DemoServiceService, private fb: FormBuilder, private common: CommonService) {

    this.farmerDetails = this.fb.group({
      FarmerName: ['', Validators.required],
      CropName: ['', Validators.required],
      min: ['', Validators.required],
      Max: ['', Validators.required],
    })


  }

  ngOnInit() {

    this.dservice.getAgeDetails().subscribe((res: any) => {
      this.details = res.data;

    })

  }




  onSave() {

    this.common.saveFarmerData(this.farmerDetails.value).subscribe(res=>{
      console.log('SAVED')
    })
  }




}
