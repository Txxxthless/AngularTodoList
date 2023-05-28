import { Component, ViewChild, ElementRef } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  todoService: TodoService;

  @ViewChild('descriptionInput') descriptionInputRef: ElementRef;

  constructor(todoService: TodoService) {
    this.todoService = todoService;
  }

  onSubmit() {
    if (this.descriptionInputRef.nativeElement.value) {
      this.todoService.addTodo(
        new Todo(this.descriptionInputRef.nativeElement.value)
      );
      this.descriptionInputRef.nativeElement.value = '';
    }
  }
}
