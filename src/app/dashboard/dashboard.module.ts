import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';
import { DashboardComponent } from './dashboard.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [SearchComponent, CardsComponent, DashboardComponent],
  imports: [
    CommonModule,
    AppRoutingModule,
    RouterModule.forChild([
      {path: '',component: DashboardComponent}, 

   ])
  ],
  bootstrap:[DashboardComponent]
})
export class DashboardModule { }