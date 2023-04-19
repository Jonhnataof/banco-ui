import { TestBed } from '@angular/core/testing';

import { ContaFormularioService } from './conta-formulario.service';

describe('ContaFormularioService', () => {
  let service: ContaFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
