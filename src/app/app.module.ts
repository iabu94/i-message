import { NgModule } from '@angular/core';
import { FlexLayoutModule } from '@angular/flex-layout';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LeftSideComponent } from './statusbar-time-date/left-side/left-side.component';
import { RightSideComponent } from './statusbar-time-date/right-side/right-side.component';
import { NotchComponent } from './statusbar-time-date/notch/notch.component';
import { StatusbarTimeDateComponent } from './statusbar-time-date/statusbar-time-date.component';
import { LockIconComponent } from './statusbar-time-date/lock-icon/lock-icon.component';
import { EditableTimeComponent } from './statusbar-time-date/editable-time/editable-time.component';
import { LockScreenDateComponent } from './statusbar-time-date/lock-screen-date/lock-screen-date.component';
import { LockScreenNotificationComponent } from './lock-screen-notification/lock-screen-notification.component';

@NgModule({
  declarations: [AppComponent, LeftSideComponent, RightSideComponent, NotchComponent, StatusbarTimeDateComponent, LockIconComponent, EditableTimeComponent, LockScreenDateComponent, LockScreenNotificationComponent],
  imports: [BrowserModule, AppRoutingModule, FlexLayoutModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
