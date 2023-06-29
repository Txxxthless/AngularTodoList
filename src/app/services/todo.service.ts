import { Injectable } from '@angular/core';
import { Todo } from '../models/todo.model';
import { BehaviorSubject } from 'rxjs';

@Injectable()
export class TodoService {
  todos = new BehaviorSubject<Todo[]>([
    new Todo('Wash the dishes'),
    new Todo('Learn Angular'),
  ]);

  getTodos() {
    return this.todos.value;
  }

  addTodo(todo: Todo) {
    this.todos.next([...this.todos.value, todo]);
  }

  toggleTodo(todo: Todo) {
    const toChangeTodo: Todo = this.todos.value.find(
      (todoItem) => todoItem.description === todo.description
    );
    toChangeTodo.isDone = !toChangeTodo.isDone;
  }

  deleteTodo(todo: Todo) {
    this.todos.next(
      this.todos.value.filter(
        (todoItem) => todoItem.description !== todo.description
      )
    );
  }

  toggleTodoImportant(todo: Todo) {
    const toChangeTodo: Todo = this.todos.value.find(
      (todoItem) => todoItem.description === todo.description
    );
    toChangeTodo.isImportant = !toChangeTodo.isImportant;
  }
}
