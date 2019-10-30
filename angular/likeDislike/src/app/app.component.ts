import { Component } from '@angular/core';
import { Post } from './models/film';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less']
})
export class AppComponent {
  title = 'likeDislike';

  liste = [
    new Post('Tarzan', 'Walt Disney'),
    new Post('Tarzan', 'Walt Disney'),
    new Post('Tarzan', 'Walt Disney')
  ]
}
