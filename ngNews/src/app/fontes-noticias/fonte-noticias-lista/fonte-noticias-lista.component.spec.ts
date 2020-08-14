import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FonteNoticiasListaComponent } from './fonte-noticias-lista.component';

describe('FonteNoticiasListaComponent', () => {
  let component: FonteNoticiasListaComponent;
  let fixture: ComponentFixture<FonteNoticiasListaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FonteNoticiasListaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FonteNoticiasListaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
