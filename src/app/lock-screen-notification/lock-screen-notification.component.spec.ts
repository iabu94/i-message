import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockScreenNotificationComponent } from './lock-screen-notification.component';

describe('LockScreenNotificationComponent', () => {
  let component: LockScreenNotificationComponent;
  let fixture: ComponentFixture<LockScreenNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockScreenNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockScreenNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
