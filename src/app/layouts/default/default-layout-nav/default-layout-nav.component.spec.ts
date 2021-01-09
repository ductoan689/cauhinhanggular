import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutNavComponent } from './default-layout-nav.component';

describe('DefaultLayoutNavComponent', () => {
  let component: DefaultLayoutNavComponent;
  let fixture: ComponentFixture<DefaultLayoutNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
