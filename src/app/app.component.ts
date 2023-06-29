import { Component, OnInit } from '@angular/core';
import { TodoService } from './services/todo.service';
import { Todo } from './models/todo.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private todoService: TodoService) {}

  ngOnInit(): void {
    this.retriveTodos();
  }

  retriveTodos() {
    const todos = localStorage.getItem('todos');
    if (todos) {
      this.todoService.todos.next(JSON.parse(todos) as Todo[]);
    }
  }
}
