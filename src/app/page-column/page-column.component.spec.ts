import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageColumnComponent } from './page-column.component';

describe('PageColumnComponent', () => {
  let component: PageColumnComponent;
  let fixture: ComponentFixture<PageColumnComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageColumnComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageColumnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
