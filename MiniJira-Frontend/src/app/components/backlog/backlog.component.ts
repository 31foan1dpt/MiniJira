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
    private dataService: DataService, 
    private dialog: MatDialog
    ){}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.dataService.getAllTasks().subscribe((tasks: Task[]) =>{
      this.tasks = tasks;
      console.log(this.tasks);
      
    })
  }

  createTask() {
    const dialogRef = this.dialog.open(CreateTaskDialogComponent);
    dialogRef.afterClosed().subscribe((task: Task) => {
      if (task) {
        console.log(task);
         // Check if task is not null
        this.dataService.createTask(task).subscribe(response => {
          console.log('Task created:', response);
        });
      }
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
