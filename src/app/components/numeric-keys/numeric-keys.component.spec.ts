import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NumericKeysComponent } from './numeric-keys.component';

describe('NumericKeysComponent', () => {
  let component: NumericKeysComponent;
  let fixture: ComponentFixture<NumericKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NumericKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NumericKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
