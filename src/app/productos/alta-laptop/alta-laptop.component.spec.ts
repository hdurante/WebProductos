import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaLaptopComponent } from './alta-laptop.component';

describe('AltaLaptopComponent', () => {
  let component: AltaLaptopComponent;
  let fixture: ComponentFixture<AltaLaptopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaLaptopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaLaptopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
