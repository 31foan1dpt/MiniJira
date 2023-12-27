import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByIDDialogComponent } from './search-by-iddialog.component';

describe('SearchByIDDialogComponent', () => {
  let component: SearchByIDDialogComponent;
  let fixture: ComponentFixture<SearchByIDDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SearchByIDDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchByIDDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
