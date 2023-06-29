import { Component } from '@angular/core';
import { TodoService } from '../services/todo.service';
import { Todo } from '../models/todo.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-todo-create',
  templateUrl: './todo-create.component.html',
  styleUrls: ['./todo-create.component.css'],
})
export class TodoCreateComponent {
  creationForm = new FormGroup({
    description: new FormControl('', [Validators.required]),
  });

  constructor(private todoService: TodoService) {}

  onSubmit() {
    if (this.description.value.trim()) {
      this.todoService.addTodo(new Todo(this.description.value));
      this.description.setValue('');
      this.description.markAsPristine();
    }
  }

  get description() {
    return this.creationForm.get('description');
  }
}
