import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';
import { MatIconModule } from '@angular/material/icon';
import {MatDialog} from '@angular/material/dialog';
import { TaskDialogComponent } from '../dialogs/task-dialog/task-dialog.component';
import { CreateTaskDialogComponent } from '../dialogs/create-task-dialog/create-task-dialog.component';
import { BacklogInfoDialogComponent } from '../dialogs/backlog-info-dialog/backlog-info-dialog.component';
import { SearchByIDDialogComponent } from '../dialogs/search-by-iddialog/search-by-iddialog.component';
import { ErrorDialogComponent } from '../dialogs/error-dialog/error-dialog.component';

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
        this.dataService.createTask(task).subscribe(response => {
          this.tasks.push(task)
        });
      }
    });
  }
  

  deleteTask(task: Task) {
    this.dataService.deleteTask(task.id).subscribe(() => {
      const index = this.tasks.indexOf(task);
      if (index > -1) {
        this.tasks.splice(index, 1);
      }
    });
  }

  openDialog(task: Task) {
    this.dialog.open(TaskDialogComponent, {
      data: {
        task: task
      }
    });
  }

  openInfoDialog() {
    const dialogRef = this.dialog.open(BacklogInfoDialogComponent);
  }

  searchTaskByID() {
    const dialogRef = this.dialog.open(SearchByIDDialogComponent);
  
    dialogRef.afterClosed().subscribe(id => {
      if (id) {
        this.dataService.getTaskById(id).subscribe(
          task => {
            if (task) {
              // If the task is found, open the TaskDialogComponent.
              this.dialog.open(TaskDialogComponent, {
                data: {task: task}
              });
            } else {
              // If the task is not found (i.e., task is null), open the ErrorDialogComponent.
              this.dialog.open(ErrorDialogComponent, {
                data: { message: `Could not find the task with the ID: ${id}` }
              });
            }
          },
          error => {
            // Handle other errors here.
          }
        );
      }
    });
  }
  
  

}
