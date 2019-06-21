import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigureWebsiteComponent } from './configure-website.component';

describe('ConfigureWebsiteComponent', () => {
  let component: ConfigureWebsiteComponent;
  let fixture: ComponentFixture<ConfigureWebsiteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfigureWebsiteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfigureWebsiteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
