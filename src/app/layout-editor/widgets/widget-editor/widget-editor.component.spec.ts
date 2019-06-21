import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetEditorComponent } from './widget-editor.component';

describe('WidgetEditorComponent', () => {
  let component: WidgetEditorComponent;
  let fixture: ComponentFixture<WidgetEditorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetEditorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetEditorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
