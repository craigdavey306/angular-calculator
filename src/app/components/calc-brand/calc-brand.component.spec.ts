import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcBrandComponent } from './calc-brand.component';

describe('CalcBrandComponent', () => {
  let component: CalcBrandComponent;
  let fixture: ComponentFixture<CalcBrandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcBrandComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcBrandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
