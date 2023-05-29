import { Component, Input } from '@angular/core';
import { Todo } from '../models/todo.model';
import { TodoService } from '../services/todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css'],
})
export class TodoComponent {
  @Input() todo: Todo = new Todo('');

  private todoService: TodoService;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  onToggleTodo() {
    this.todoService.toggleTodo(this.todo);
  }

  onDeleteTodo() {
    this.todoService.deleteTodo(this.todo);
  }
}
