import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BitButtonComponent } from './bit-button.component';

describe('BitButtonComponent', () => {
  let component: BitButtonComponent;
  let fixture: ComponentFixture<BitButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BitButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BitButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
