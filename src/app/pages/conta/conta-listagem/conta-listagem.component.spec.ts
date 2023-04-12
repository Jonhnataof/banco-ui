import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContaListagemComponent } from './conta-listagem.component';

describe('ContaListagemComponent', () => {
  let component: ContaListagemComponent;
  let fixture: ComponentFixture<ContaListagemComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContaListagemComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ContaListagemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
