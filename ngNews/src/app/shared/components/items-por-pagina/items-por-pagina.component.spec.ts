import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsPorPaginaComponent } from './items-por-pagina.component';

describe('ItemsPorPaginaComponent', () => {
  let component: ItemsPorPaginaComponent;
  let fixture: ComponentFixture<ItemsPorPaginaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ItemsPorPaginaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsPorPaginaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
