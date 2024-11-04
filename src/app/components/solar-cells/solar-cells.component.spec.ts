import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SolarCellsComponent } from './solar-cells.component';

describe('SolarCellsComponent', () => {
  let component: SolarCellsComponent;
  let fixture: ComponentFixture<SolarCellsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SolarCellsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SolarCellsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
