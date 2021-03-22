import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardQuickActionsComponent } from './board-quick-actions.component';

describe('BoardQuickActionsComponent', () => {
  let component: BoardQuickActionsComponent;
  let fixture: ComponentFixture<BoardQuickActionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BoardQuickActionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardQuickActionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
