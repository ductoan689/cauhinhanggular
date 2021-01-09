import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutHeaderComponent } from './default-layout-header.component';

describe('DefaultLayoutHeaderComponent', () => {
  let component: DefaultLayoutHeaderComponent;
  let fixture: ComponentFixture<DefaultLayoutHeaderComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutHeaderComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
