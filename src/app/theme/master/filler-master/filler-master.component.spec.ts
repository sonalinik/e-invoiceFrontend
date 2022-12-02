import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FillerMasterComponent } from './filler-master.component';

describe('FillerMasterComponent', () => {
  let component: FillerMasterComponent;
  let fixture: ComponentFixture<FillerMasterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FillerMasterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FillerMasterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
