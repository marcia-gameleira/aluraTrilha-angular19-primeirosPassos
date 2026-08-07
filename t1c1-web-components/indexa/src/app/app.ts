import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Container } from './componentes/container/container';

@Component({
  selector: 'app-root',
  imports: [Container],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('indexa');
}
