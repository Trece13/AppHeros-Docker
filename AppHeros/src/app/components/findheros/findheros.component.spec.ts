import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindherosComponent } from './findheros.component';

describe('FindherosComponent', () => {
  let component: FindherosComponent;
  let fixture: ComponentFixture<FindherosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindherosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindherosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
