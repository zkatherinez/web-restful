import { Injectable } from '@angular/core';
import { Todo } from 'src/app/list-todos/list-todos.component';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(
    private http:HttpClient
  ) { }
  retrieveAllTodos(username){
    return this.http.get<Todo[]>(`http://localhost:8080/users/${username}}/todos`)
    //console.log("Execute Hello Workd Bean Service")
  }
  deleteTodo(username, id){
    return this.http.delete(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  retrieveTodo(username, id){
    return this.http.get<Todo>(`http://localhost:8080/users/${username}/todos/${id}`)
  }
  updateTodo(username, id, todo){
    return this.http.put(`http://localhost:8080/users/${username}/todos/${id}`, todo);
  }
  createTodo(username, todo){
    return this.http.post(`http://localhost:8080/users/${username}/todos`, todo);
  }
}
