import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HighLevelActionsComponent } from './high-level-actions.component';

describe('HighLevelActionsComponent', () => {
  let component: HighLevelActionsComponent;
  let fixture: ComponentFixture<HighLevelActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HighLevelActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HighLevelActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
