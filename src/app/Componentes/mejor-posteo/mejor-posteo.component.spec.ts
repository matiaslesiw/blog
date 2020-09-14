/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { MejorPosteoComponent } from './mejor-posteo.component';

describe('MejorPosteoComponent', () => {
  let component: MejorPosteoComponent;
  let fixture: ComponentFixture<MejorPosteoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MejorPosteoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MejorPosteoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
