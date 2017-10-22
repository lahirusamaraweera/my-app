import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { JsonpModule } from '@angular/http'; 
import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';

import { calendar } from './calendar/calendar.component';
import { login } from './login/login.component';

const appRoutes: Routes = [
  {
    path : 'cal',
    component : calendar
  },
  {
    path : 'login',
    component : login
  },
  
  
];

@NgModule({ 
  
  declarations: [
    AppComponent,
    login,
    calendar,
   
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
     FormsModule,
    ReactiveFormsModule,
    JsonpModule,
    RouterModule.forRoot(
      appRoutes,
     
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {

 
 }
