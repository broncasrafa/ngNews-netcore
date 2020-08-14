import { TestBed } from '@angular/core/testing';

import { FonteNoticiaService } from '../../fontes-noticias/fontes-noticias.service';

describe('FonteNoticiaService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FonteNoticiaService = TestBed.get(FonteNoticiaService);
    expect(service).toBeTruthy();
  });
});
