package com.example.MiniJiraService.repositrories;

import com.example.MiniJiraService.models.Task;
import org.springframework.data.repository.CrudRepository;

public interface TaskRepository extends CrudRepository<Task,String>{
}
