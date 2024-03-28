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

  toggleTodo(index: number) {
    this.todos[index].done = !this.todos[index].done;
  }
  
  deleteTodo(index: number){
    this.todos.splice(index, 1);
  }

  title = 'my-app';
}
