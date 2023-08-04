import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GuestlistComponent } from './guestlist.component';

describe('GuestlistComponent', () => {
  let component: GuestlistComponent;
  let fixture: ComponentFixture<GuestlistComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [GuestlistComponent]
    });
    fixture = TestBed.createComponent(GuestlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
