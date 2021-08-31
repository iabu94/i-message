import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatusbarTimeDateComponent } from './statusbar-time-date.component';

describe('StatusbarTimeDateComponent', () => {
  let component: StatusbarTimeDateComponent;
  let fixture: ComponentFixture<StatusbarTimeDateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatusbarTimeDateComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatusbarTimeDateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
