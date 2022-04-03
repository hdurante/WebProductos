import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AltaTelevisionComponent } from './alta-television.component';

describe('AltaTelevisionComponent', () => {
  let component: AltaTelevisionComponent;
  let fixture: ComponentFixture<AltaTelevisionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AltaTelevisionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AltaTelevisionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
