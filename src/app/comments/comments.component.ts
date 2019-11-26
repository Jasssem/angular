import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-comments',
  templateUrl: './comments.component.html',
  styleUrls: ['./comments.component.css']
})
export class CommentsComponent implements OnInit {
  comment;
  constructor(private alt: NewService, route: ActivatedRoute) {
    console.log(route.snapshot.params.id);
    this.alt.getPostsComments(route.snapshot.params.id).subscribe(data=>{
      console.log(data);
      this.comment= data;
      
    })
    
      

  }

  ngOnInit() {
  }

}
