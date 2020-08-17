import { Component, OnInit } from '@angular/core';

import { SocketIOService } from "../services/socket-io.service";
import { DialogService } from "../services/dialog.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private socket: SocketIOService, private dialog: DialogService) { }

  ngOnInit(): void {
    this.socket.connect()
  }

  openLoginDialog(){
    this.dialog.openLoginDialog()
  }

}
