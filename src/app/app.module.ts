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
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { TestComponent } from './demo/test/test.component';
import { OneComponent } from './demo/one/one.component';
import { HighlightDirective } from './highlight.directive';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    SignUpComponent,
    DemoComponent,
    TestComponent,
    OneComponent,
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {path: 'login',component: LoginComponent},
      {path:'signup',component: SignUpComponent},
      {path: 'pages',
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
   ]),
    BrowserAnimationsModule
  ],
  providers: [HttpClient],
  bootstrap: [AppComponent]
})
export class AppModule { }

 