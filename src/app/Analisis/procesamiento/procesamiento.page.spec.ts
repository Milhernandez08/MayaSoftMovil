import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcesamientoPage } from './procesamiento.page';

describe('ProcesamientoPage', () => {
  let component: ProcesamientoPage;
  let fixture: ComponentFixture<ProcesamientoPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProcesamientoPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcesamientoPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
