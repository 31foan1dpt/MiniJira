import { Component, OnInit } from '@angular/core';
import { Task } from 'src/app/models/task';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-backlog',
  templateUrl: './backlog.component.html',
  styleUrls: ['./backlog.component.css']
})
export class BacklogComponent {
  tasks: Task[] = [];

  constructor(private dataservice: DataService){}

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

}
