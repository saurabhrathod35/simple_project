import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PageRowComponent } from './page-row.component';

describe('PageRowComponent', () => {
  let component: PageRowComponent;
  let fixture: ComponentFixture<PageRowComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PageRowComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PageRowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
