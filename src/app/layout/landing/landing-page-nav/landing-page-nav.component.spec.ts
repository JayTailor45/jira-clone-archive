import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LandingPageNavComponent } from './landing-page-nav.component';

describe('LandingPageNavComponent', () => {
  let component: LandingPageNavComponent;
  let fixture: ComponentFixture<LandingPageNavComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LandingPageNavComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LandingPageNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
