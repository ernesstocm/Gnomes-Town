import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GnomeDetailsComponent } from './gnome-details.component';

describe('GnomeDetailsComponent', () => {
  let component: GnomeDetailsComponent;
  let fixture: ComponentFixture<GnomeDetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GnomeDetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GnomeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
