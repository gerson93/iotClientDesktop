import { Injectable } from '@angular/core';

import { MatDialog } from "@angular/material/dialog";

import { LoginComponent } from "../dialog/login/login.component";
import { login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openLoginDialog(login: login) {
    if (!login) {
      login = {
        user: '',
        password: '',
        url: '',
        save: false,
      }
    }
    return new Promise((resolve, rejected) => {
      const loginDialog = this.dialog.open(LoginComponent, {
        height: '400px',
        data: { user: login.user, password: login.password, url: login.url, save: login.save }
      })

      loginDialog.afterClosed().subscribe((login: login) => {
        if (login) { resolve(login) } else { rejected() }
      })
    })
  }
}
