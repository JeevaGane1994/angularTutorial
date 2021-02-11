import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table/book-table.component';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'; 
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatRippleModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';


@NgModule({
  declarations: [BookTableComponent, ConfirmationComponent],
  imports: [
    NgxMatTimepickerModule,
    CommonModule,
    FormsModule,
    MatIconModule,
    MatDividerModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    MatInputModule,
    MatButtonModule,
    MatRippleModule,
    NgxStarRatingModule, 
    RouterModule.forChild([
      {path: '',component: BookTableComponent},
      {path: 'confirm',component: ConfirmationComponent},
    ])
  ]  
})
export class BookingModule { }

 