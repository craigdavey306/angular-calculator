import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OperatorKeysComponent } from './operator-keys.component';

describe('OperatorKeysComponent', () => {
  let component: OperatorKeysComponent;
  let fixture: ComponentFixture<OperatorKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [OperatorKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(OperatorKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
