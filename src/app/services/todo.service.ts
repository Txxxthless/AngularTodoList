import { EventEmitter, Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';

@Injectable()
export class TodoService {
  private todos: Todo[] = [
    new Todo('Wash the dishes'),
    new Todo('Learn Angular'),
  ];

  todosChanged = new EventEmitter<Todo[]>();

  getTodos() {
    return this.todos.slice();
  }

  addTodo(todo: Todo) {
    this.todos.push(todo);
    this.todosChanged.emit(this.todos);
  }
}
