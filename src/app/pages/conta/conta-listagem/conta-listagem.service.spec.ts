import { TestBed } from '@angular/core/testing';

import { ContaListagemService } from './conta-listagem.service';

describe('ContaListagemService', () => {
  let service: ContaListagemService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContaListagemService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
