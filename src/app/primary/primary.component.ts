import { Component, OnInit } from '@angular/core';
import { HttpClient} from '@angular/common/http';

import { NewService } from '../services/new.service';


@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {
  postId;
  posts;
  constructor( private serv:NewService) { }
   
    ngOnInit() {
  
    };

  }
