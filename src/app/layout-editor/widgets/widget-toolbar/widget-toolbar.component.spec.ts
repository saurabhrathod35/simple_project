import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetToolbarComponent } from './widget-toolbar.component';

describe('WidgetToolbarComponent', () => {
  let component: WidgetToolbarComponent;
  let fixture: ComponentFixture<WidgetToolbarComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetToolbarComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetToolbarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
