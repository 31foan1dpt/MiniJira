import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { CreateTaskDialogComponent } from '../dialogs/create-task-dialog/create-task-dialog.component';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {
  tasks: Task[] = [];

  constructor(
    private dataservice: DataService, 
    private dialog: MatDialog
    ){}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.dataservice.getAllTasks().subscribe((tasks: Task[]) =>{
      this.tasks = tasks;
      console.log(this.tasks);
      
    })
  }

  createTask() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);
    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log('Form data:', result); // This will log the form data to the console
      // Call your DataService here to send the created task to your backend
    });
  }
  

  deleteTask(task: Task) {
    // Code to delete the task
  }

  openDialog(task: Task) {
    this.dialog.open(TaskDialogComponent, {
      data: {
        task: task
      }
    });
  }

}
