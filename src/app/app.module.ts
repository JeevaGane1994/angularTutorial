import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { DemoComponent } from './demo/demo.component';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    DashboardComponent,
    SignUpComponent,
    DemoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login',component: LoginComponent},
      {path:'signup',component: SignUpComponent},
      {path: 'pages', component: DashboardComponent,
        children: [  
          {
            path: 'dashboard',
            loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)    
          },
          {
            path: 'book',
            loadChildren: () => import('./booking/booking.module').then(m => m.BookingModule)    
          },
        ]
      },
      { path: '',   redirectTo: '/login', pathMatch: 'full' },
      { path: '**',   component: DemoComponent }, 
   ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

 