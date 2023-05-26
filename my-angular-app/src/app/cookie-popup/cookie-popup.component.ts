
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

import { CommonModule } from '@angular/common';
import { MatDialogModule } from '@angular/material/dialog';

import { NgModule } from '@angular/core';

@Component({
  selector: 'app-cookie-popup',
  templateUrl: './cookie-popup.component.html',
  styleUrls: ['./cookie-popup.component.css']
})
export class CookiePopupComponent implements OnInit {
  constructor(public dialogRef: MatDialogRef<CookiePopupComponent>) {}

  ngOnInit(): void {}

  acceptCookies(): void {
    // Set the necessary logic to handle cookie acceptance
    // For example, you can set a cookie value or trigger an event
    this.dialogRef.close(true);
  }
}
