import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './dialog/login/login.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FirstComponent,
    SecondComponent,
    ThirdComponent,
    LoginComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    MatSidenavModule,
    NoopAnimationsModule,
    FlexLayoutModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
