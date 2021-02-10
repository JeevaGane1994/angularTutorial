import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookTableComponent } from './book-table/book-table.component';
import { RouterModule } from '@angular/router';
import { ConfirmationComponent } from './confirmation/confirmation.component';



@NgModule({
  declarations: [BookTableComponent, ConfirmationComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: '',component: BookTableComponent},
      {path: 'confirm',component: ConfirmationComponent},
    ])
  ]  
})
export class BookingModule { }

 