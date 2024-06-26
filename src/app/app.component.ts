import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent {
  todos = [
    { todo: 'Einkaufen', done: false },
    { todo: 'Lesen', done: false },
    { todo: 'Programmieren', done: true },
  ];

  newTodo = '';

  setTodo(event: KeyboardEvent) {
    this.newTodo = (event.target as HTMLInputElement).value;
    console.log(this.todos);
  }

  addTodo() {
    if (this.newTodo.trim() !== '') {
      this.todos.push({ todo: this.newTodo, done: false });
    }
  }

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }

  deleteTodo(index: number) {
    this.todos.splice(index, 1);
  }

  countOpenTodos(){
    const done = this.todos.filter((item) => {return !item.done})
    return done
  }

  title = 'my-app';
}
