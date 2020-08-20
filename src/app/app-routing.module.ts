import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule, Routes } from "@angular/router";

import { DeviceComponent } from "./device/device.component";
import { AlarmComponent } from "./alarm/alarm.component";
import { HistoryComponent } from "./history/history.component";

const routes: Routes = [
  { path: '', component: DeviceComponent },
  { path: 'devices', component: DeviceComponent },
  { path: 'alarms', component: AlarmComponent },
  { path: 'history', component: HistoryComponent }
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule { }
