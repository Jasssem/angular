import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
  post;
  constructor(private posts: NewService) { }

  ngOnInit() {
    this.posts.getDatta().subscribe(data => {
      console.log(data);
      this.post = data;
    })
    console.log(this.post);
    
  }
}
