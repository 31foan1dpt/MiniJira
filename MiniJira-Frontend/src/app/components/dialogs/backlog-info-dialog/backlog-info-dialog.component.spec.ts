import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BacklogInfoDialogComponent } from './backlog-info-dialog.component';

describe('BacklogInfoDialogComponent', () => {
  let component: BacklogInfoDialogComponent;
  let fixture: ComponentFixture<BacklogInfoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BacklogInfoDialogComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BacklogInfoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
