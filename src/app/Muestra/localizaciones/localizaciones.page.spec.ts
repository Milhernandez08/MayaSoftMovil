import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LocalizacionesPage } from './localizaciones.page';

describe('LocalizacionesPage', () => {
  let component: LocalizacionesPage;
  let fixture: ComponentFixture<LocalizacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LocalizacionesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LocalizacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
