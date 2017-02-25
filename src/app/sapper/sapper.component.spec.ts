/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { SapperComponent } from './sapper.component';

describe('SapperComponent', () => {
  let component: SapperComponent;
  let fixture: ComponentFixture<SapperComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SapperComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SapperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
