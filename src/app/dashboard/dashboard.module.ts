import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SearchComponent } from './search/search.component';
import { RouterModule } from '@angular/router';
import { CardsComponent } from './cards/cards.component';



@NgModule({
  declarations: [SearchComponent, CardsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {path: 'search',component: SearchComponent},
      {path: 'cards',component: CardsComponent}

   ])
  ]
})
export class DashboardModule { }