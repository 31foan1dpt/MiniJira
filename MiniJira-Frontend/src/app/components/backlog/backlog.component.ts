import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { TaskDialogComponent } from '../task-dialog/task-dialog.component';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {
  tasks: Task[] = [];

  constructor(private dataservice: DataService, 
    private dialog: MatDialog){}

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
    // Code to create a new task
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
