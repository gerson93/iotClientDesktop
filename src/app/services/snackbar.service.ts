import { Injectable } from '@angular/core';
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class SnackbarService {

  constructor(private snackBar: MatSnackBar) { }

  openSnackBar(message: string, action?: string, callbackAction?: any) {
    if (!action) { action = 'Aceptar' }
    const snackBar = this.snackBar.open(message, action, {
      duration: 2000,
    })

    if (callbackAction) {
      snackBar.onAction().subscribe(
        callbackAction
      )
    }
  }


}
