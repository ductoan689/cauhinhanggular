import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeAddAddcardComponent } from './home-add-addcard.component';

describe('HomeAddAddcardComponent', () => {
  let component: HomeAddAddcardComponent;
  let fixture: ComponentFixture<HomeAddAddcardComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HomeAddAddcardComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HomeAddAddcardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
