import { Component, OnInit } from '@angular/core';

import { SocketIOService } from "../services/socket-io.service";
import { LoginService } from "../services/login.service";

import { OPTIONS } from "../shared/options";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})

export class SidebarComponent implements OnInit {
  options = OPTIONS
  constructor(private socket: SocketIOService, private login: LoginService) { }

  ngOnInit(): void {
    /* this.socket.connect() */
    this.login.authenticateWithSavedCredentials()
  }

  openLoginDialog(){
    this.login.loginWindow()
  }

}
