import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  //templateUrl: './app.component.html',
  template: `
  <h1>{{title}}</h1>
  <h1>Hello World</h1>
  <h1>Result = {{50+60}}</h1>`,

  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'Welcome to learning Angular';
}
