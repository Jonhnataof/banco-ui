import { TestBed } from '@angular/core/testing';

import { ClienteListagemService } from './cliente-listagem.service';

describe('ClienteListagemService', () => {
  let service: ClienteListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClienteListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
