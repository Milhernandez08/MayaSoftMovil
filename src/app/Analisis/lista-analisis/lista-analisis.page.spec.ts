import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaAnalisisPage } from './lista-analisis.page';

describe('ListaAnalisisPage', () => {
  let component: ListaAnalisisPage;
  let fixture: ComponentFixture<ListaAnalisisPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaAnalisisPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaAnalisisPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
