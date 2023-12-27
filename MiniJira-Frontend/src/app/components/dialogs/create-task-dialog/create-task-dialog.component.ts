import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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
      id: '',
      title: '',
      description: '',
      status: '',
      assignee: '',
      creationDate: '',
      dueDate: '',
      comments: this.fb.array(['Comment function needs to be added', 'Descriptionfunction needs to be adjusted', 'DatesFUnction eed to be added', ' Prefiled Comments loaded...'])
    });
  }

  onNoClick(): void {
    this.dialogRef.close();
  }
}
