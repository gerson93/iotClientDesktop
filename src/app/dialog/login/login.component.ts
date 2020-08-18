import { Component, OnInit, inject, Inject } from '@angular/core';

import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { Validators, FormBuilder } from "@angular/forms";
import { login } from 'src/app/interfaces/login.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private fb: FormBuilder, private dialogRef: MatDialogRef<LoginComponent>,
    @Inject(MAT_DIALOG_DATA) public data: login) { }

  ngOnInit(): void {
  }

  loginForm = this.fb.group({
    user: ['', Validators.required],
    password: ['', Validators.required],
    url: ['', Validators.required],
    save: false
  })

}
