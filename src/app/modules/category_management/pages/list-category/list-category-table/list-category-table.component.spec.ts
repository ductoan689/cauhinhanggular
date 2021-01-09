import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListCategoryTableComponent } from './list-category-table.component';

describe('ListCategoryTableComponent', () => {
  let component: ListCategoryTableComponent;
  let fixture: ComponentFixture<ListCategoryTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListCategoryTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListCategoryTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
