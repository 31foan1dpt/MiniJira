import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-create-task-dialog',
  templateUrl: './create-task-dialog.component.html',
  styleUrls: ['./create-task-dialog.component.css']
})


export class CreateTaskDialogComponent {
  form: FormGroup;

  constructor(
    public dialogRef: MatDialogRef<CreateTaskDialogComponent>,
    private fb: FormBuilder
  ) {
    this.form = this.fb.group({
      id: ['', Validators.required],
      title: '',
      description: '',
      status: '',
      assignee: '',
      creationDate: '',
      dueDate: '',
      comments: this.fb.array(['Comment function needs to be added', 'Description function needs to be adjusted', 'DatesFunction needs to be added', ' Precreated Comments loaded...'])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
