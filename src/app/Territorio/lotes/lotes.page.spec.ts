import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LotesPage } from './lotes.page';

describe('LotesPage', () => {
  let component: LotesPage;
  let fixture: ComponentFixture<LotesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LotesPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LotesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
