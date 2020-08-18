import { Injectable } from '@angular/core';
import { Socket } from "ngx-socket-io";
import { login } from '../interfaces/login.interface';

@Injectable({
  providedIn: 'root'
})
export class SocketIOService {

  constructor(private socket: Socket) { }

  connect(url: string, token?: string) {
    return new Promise((resolve, rejected) => {
      this.socket = new Socket({
        url: url, options: {
          query: {
            token: token
          }
        }
      })
      this.socket.connect()
      setTimeout(() => {
        if (this.socket.ioSocket.connected) { resolve() } else { rejected(url) }
      }, 500)/* se esperan 500 ms para evaluar si se realizó o no la conexión */
    })
  }

  validateCredentials(login: login) {
    return new Promise((resolve, rejected) => {
      this.socket.emit('validateCredentials', login, (token: string, level: string) => {
        if (level == 'none') { rejected() }
        else {
          login.token = token
          login.level = level
          this.reConnect(token)
          resolve(login)
        }
      })
    })
  }

  reConnect(token: string){
    const address = this.socket.ioSocket.io.uri
    this.disconnect()
    this.connect(address, token)
  }

  disconnect(){
    this.socket.disconnect()
  }
}
