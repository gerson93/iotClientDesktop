import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FlexLayoutModule } from '@angular/flex-layout';

import { SocketIoModule, SocketIoConfig } from 'ngx-socket-io';

import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDialogModule } from '@angular/material/dialog';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FirstComponent } from './first/first.component';
import { SecondComponent } from './second/second.component';
import { ThirdComponent } from './third/third.component';

import { AppRoutingModule } from "./app-routing.module";
import { LoginComponent } from './dialog/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


const config: SocketIoConfig = { url: 'http://localhost:8000', options: {} };

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
    BrowserAnimationsModule,
    BrowserModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    NoopAnimationsModule,
    FlexLayoutModule,
    MatDialogModule,
    SocketIoModule.forRoot(config)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
