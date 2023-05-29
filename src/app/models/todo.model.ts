export class Todo {
  description: string;
  isDone: boolean;
  isImportant: boolean;

  constructor(description: string) {
    this.description = description;
    this.isDone = false;
    this.isImportant = false;
  }
}
