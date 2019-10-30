import { Component, OnInit, Input } from '@angular/core';
import { Post } from '../models/film';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.less']
})
export class PostComponent implements OnInit {

  @Input() liste: Post;
  constructor() { }

  ngOnInit() {

  }

}
