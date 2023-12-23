package com.example.MiniJiraService.services;

import com.example.MiniJiraService.models.Task;
import com.example.MiniJiraService.repositrories.TaskRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepo;

    @Autowired
    public TaskService(TaskRepository taskRepo) {
        this.taskRepo = taskRepo;
    }

    public List<Task> getAllTasks() {
        return (List<Task>) taskRepo.findAll();
    }

    public Task getTaskbyID(String id) {
        return taskRepo.findById(id).orElse(null);
    }

    public Task saveTask(Task task) {
        return taskRepo.save(task);
    }

    public void delteTask (String id){
        taskRepo.deleteById(id);
    }


}
