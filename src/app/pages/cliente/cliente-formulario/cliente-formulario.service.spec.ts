import { TestBed } from '@angular/core/testing';

import { ClienteFormularioService } from './cliente-formulario.service';

describe('ClienteFormularioService', () => {
  let service: ClienteFormularioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteFormularioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
