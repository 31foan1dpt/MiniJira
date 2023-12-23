package com.example.MiniJiraService.controllers;

import com.example.MiniJiraService.models.Task;
import com.example.MiniJiraService.services.TaskService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("/api/task")
public class TaskController {

    private final TaskService taskService;

    @Autowired
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }

    @GetMapping
    public List<Task> getAllTasks(){
        return taskService.getAllTasks();
    }

    @GetMapping("/{id}")
    public Task getTaskById(@PathVariable String id) {
        return taskService.getTaskbyID(id);
    }

    @PostMapping
    public Task createTask(@RequestBody Task task){
        return taskService.saveTask(task);
    }

    //ToDo: add a Put-Method

    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable String id) {
        taskService.delteTask(id);
    }
}
