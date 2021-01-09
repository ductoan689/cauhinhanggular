import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DefaultLayoutFooterComponent } from './default-layout-footer.component';

describe('DefaultLayoutFooterComponent', () => {
  let component: DefaultLayoutFooterComponent;
  let fixture: ComponentFixture<DefaultLayoutFooterComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DefaultLayoutFooterComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DefaultLayoutFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
