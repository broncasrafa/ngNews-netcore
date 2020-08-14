import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FiltrosLateralComponent } from './filtros-lateral.component';

describe('FiltrosLateralComponent', () => {
  let component: FiltrosLateralComponent;
  let fixture: ComponentFixture<FiltrosLateralComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FiltrosLateralComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FiltrosLateralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
