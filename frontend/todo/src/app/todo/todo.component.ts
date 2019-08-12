import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Todo } from '../list-todos/list-todos.component';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  id: number
  todo: Todo

  constructor(
    private todoService: TodoDataService,
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['id']; // got id from route parameter
    this.todo = new Todo(this.id, '', false, new Date());//dummy value. unable to see it unless server is very very slow
    //by using subscribe, we are asynchronously calling this method.
    //after ngOnInit() method is completed execution, it will directly starting loading the html
    //so at that point, the object todo might be null
    if (this.id != -1) {
      this.todoService.retrieveTodo('limengfei', this.id)
        .subscribe(
          data => this.todo = data
        )
    }
  }
  saveTodo() {
    if (this.id === -1) {
      //create todo
      this.todoService.createTodo('limengfei', this.todo)
    } else {
      this.todoService.updateTodo('limengfei', this.id, this.todo)
        .subscribe(
          data => {
            console.log(data)
            this.router.navigate(['todos'])
          }
        )
    }
  }

}
