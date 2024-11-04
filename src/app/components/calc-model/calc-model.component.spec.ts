import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcModelComponent } from './calc-model.component';

describe('CalcModelComponent', () => {
  let component: CalcModelComponent;
  let fixture: ComponentFixture<CalcModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CalcModelComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalcModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
