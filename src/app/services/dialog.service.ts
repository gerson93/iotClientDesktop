import { Injectable } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";

import { LoginComponent } from "../dialog/login/login.component";

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openLoginDialog() {
    const dialog = this.dialog.open(LoginComponent, {
      height: '400px',
      width: '600px',
    })
  }
}
