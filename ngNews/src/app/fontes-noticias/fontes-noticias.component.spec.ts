import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FontesNoticiasComponent } from './fontes-noticias.component';

describe('FontesNoticiasComponent', () => {
  let component: FontesNoticiasComponent;
  let fixture: ComponentFixture<FontesNoticiasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FontesNoticiasComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FontesNoticiasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
