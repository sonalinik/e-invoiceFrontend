import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatatablekitComponent } from './datatablekit.component';

describe('DatatablekitComponent', () => {
  let component: DatatablekitComponent;
  let fixture: ComponentFixture<DatatablekitComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatatablekitComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatatablekitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
