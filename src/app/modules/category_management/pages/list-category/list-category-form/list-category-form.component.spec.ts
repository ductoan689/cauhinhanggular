import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryFormComponent } from './list-category-form.component';

describe('ListCategoryFormComponent', () => {
  let component: ListCategoryFormComponent;
  let fixture: ComponentFixture<ListCategoryFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoryFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
