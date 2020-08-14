import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BreakingNewsTickerComponent } from './breaking-news-ticker.component';

describe('BreakingNewsTickerComponent', () => {
  let component: BreakingNewsTickerComponent;
  let fixture: ComponentFixture<BreakingNewsTickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BreakingNewsTickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BreakingNewsTickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
