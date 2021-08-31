import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lock-screen-notification',
  templateUrl: './lock-screen-notification.component.html',
  styleUrls: ['./lock-screen-notification.component.scss'],
})
export class LockScreenNotificationComponent implements OnInit {
  appName = ['HORA', 'POOSA'];

  constructor() {}

  ngOnInit(): void {}
}
