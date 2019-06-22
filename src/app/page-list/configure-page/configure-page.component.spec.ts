import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurePageComponent } from './configure-page.component';

describe('ConfigurePageComponent', () => {
  let component: ConfigurePageComponent;
  let fixture: ComponentFixture<ConfigurePageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigurePageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigurePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
