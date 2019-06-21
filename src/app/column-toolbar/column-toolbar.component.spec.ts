import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ColumnToolbarComponent } from './column-toolbar.component';

describe('ColumnToolbarComponent', () => {
  let component: ColumnToolbarComponent;
  let fixture: ComponentFixture<ColumnToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ColumnToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ColumnToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
