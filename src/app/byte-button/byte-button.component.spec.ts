import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ByteButtonComponent } from './byte-button.component';

describe('ByteButtonComponent', () => {
  let component: ByteButtonComponent;
  let fixture: ComponentFixture<ByteButtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ByteButtonComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ByteButtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
