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
    this.todosChanged.emit(this.todos.slice());
  }

  toggleTodo(todo: Todo) {
    const toChangeTodo: Todo = this.todos.find(
      (todoItem) => todoItem.description === todo.description
    );
    toChangeTodo.isDone = !toChangeTodo.isDone;
    this.todosChanged.emit(this.todos.slice());
  }

  deleteTodo(todo: Todo) {
    this.todos = this.todos.filter(
      (todoItem) => todoItem.description !== todo.description
    );
    this.todosChanged.emit(this.todos.slice());
  }
}
