import { Injectable } from '@angular/core';
import { env } from '../../enviroments/enviroment';
import { HttpClient } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { Task } from '../models/task';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  private url = env.apiUrl;
  private mapping = env.mapping;

  constructor(private http: HttpClient) { }

  getAllTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(`${this.url}${this.mapping}`)
  }

  getTaskById(id: String): Observable<Task> {
    return this.http.get<Task>(`${this.url}${this.mapping}/${id}`).pipe(
      catchError(error => {
        return throwError(error);
      })
    );
  }

  createTask(task: Task): Observable<Task>{
    return this.http.post<Task>(`${this.url}${this.mapping}`, task);
  }

  deleteTask(id: String): Observable<Task> {
    return this.http.delete<Task>(`${this.url}${this.mapping}/${id}`)
  }
}
