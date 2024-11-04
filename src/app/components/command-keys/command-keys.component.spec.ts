import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CommandKeysComponent } from './command-keys.component';

describe('CommandKeysComponent', () => {
  let component: CommandKeysComponent;
  let fixture: ComponentFixture<CommandKeysComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CommandKeysComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CommandKeysComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
