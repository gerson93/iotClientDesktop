import { Injectable } from '@angular/core';
import { login } from "../interfaces/login.interface";
import { DialogService } from "./dialog.service";
import { SnackbarService } from "./snackbar.service";
import { SocketIOService } from "./socket-io.service";

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private dialog: DialogService, private snackBar: SnackbarService, private socket: SocketIOService) { }

  saveCredentials(login: login) {
    const loginString = JSON.stringify(login)
    window.localStorage.setItem('login', loginString)
  }

  getCredentials(): login {
    const login = window.localStorage.getItem('login')
    return JSON.parse(login)
  }

  removeCredentials(removeURL: boolean = false) {
    let url: string
    if (!removeURL) {
      url = this.getCredentials().url
    }
    window.localStorage.removeItem('login')
    const login: login = {
      user: '', password: '', url: url,
    }
    this.saveCredentials(login)
  }

  authenticateWithSavedCredentials() {
    const login = this.getCredentials()
    if (login.user != '') { this.authenticate(login) }
  }

  loginWindow() {
    const savedCredentials = this.getCredentials()
    this.dialog.openLoginDialog(savedCredentials)
      .then((login: login) => {
        this.authenticate(login)
      })
      .catch(() => { this.snackBar.openSnackBar('Cancelado por el usuario') })
  }

  authenticate(login: login) {
    this.socket.connect(login.url)
      .then(() => {
        this.socket.validateCredentials(login)
          .then((login: login) => {
            this.snackBar.openSnackBar('Usuario: ' + login.user + ' nivel: ' + login.level)
            if (login.save) { this.saveCredentials(login) }
          })
          .catch(() => this.snackBar.openSnackBar('Datos incorrectos'))
      })
      .catch((url: string) => { this.snackBar.openSnackBar('No se pudo establecer conexión a ' + url) })
  }
}
