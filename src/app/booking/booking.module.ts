import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table/book-table.component';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';
import { NgxStarRatingModule } from 'ngx-star-rating';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [BookTableComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    NgxStarRatingModule, 
    RouterModule.forChild([
      {path: '',component: BookTableComponent},
      {path: 'confirm',component: ConfirmationComponent},
    ])
  ]  
})
export class BookingModule { }

 