import { Injectable } from '@angular/core';
import { device } from "../interfaces/device.interface";
import { SocketIOService } from "../services/socket-io.service";

import { DEVICES } from "../shared/device";
import { SnackbarService } from './snackbar.service';

@Injectable({
  providedIn: 'root'
})
export class DevicesService {

  constructor(private socket: SocketIOService, private snackBar: SnackbarService) { }

  getDevicesList() {
    /* pedir listado de dispositivos ingresados en el servidor */
    this.socket.getDevicesList()
      .then((device) => {
        /* hacer algo con la lista de device */
      })
  }

  generateControlDevice(device: device) {
    /* función para generar un control para la comunicación con el dispositivo*/
  }

  newDevice(device?: device) {
    /* Función para ingresar nuevos dispositivos a la lista, sin tener que pedir la lista completa */
    return new Promise ((resolved, rejected) => {
      this.snackBar.openSnackBar('new device', 'add', () => {
        DEVICES.push({id: 1, name: 'new device'})
        resolved()
      })
      setTimeout(() => {
        rejected()
      }, 2000)
    })
  }

  dropDevice(device: device) {
    /* Función para eliminar un dispositivo de la lista, sin tener que pedir la lista completa */
  }

  updateDevice(device: device) {
    /* Función para actualizar parámetros de dispositivos en la lista */
  }
}
