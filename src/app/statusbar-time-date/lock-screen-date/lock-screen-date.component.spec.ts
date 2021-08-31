import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LockScreenDateComponent } from './lock-screen-date.component';

describe('LockScreenDateComponent', () => {
  let component: LockScreenDateComponent;
  let fixture: ComponentFixture<LockScreenDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LockScreenDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LockScreenDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
