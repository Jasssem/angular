import { Component, OnInit } from '@angular/core';
import { UsersComponent } from '../Users/users.component';
import { HttpClient } from '@angular/common/http';
import { NewService } from '../services/new.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  users;
  list;
  com;
  constructor(private alt: NewService, route: ActivatedRoute) {
    console.log(route.snapshot.params.id);
    this.alt.getUsersDetails(route.snapshot.params.id).subscribe(data=>{
      console.log(data);
      this.list= data;
      
    })
    this.alt.getUserspost(route.snapshot.params.id).subscribe(data=>{
      console.log(data);
      this.com= data;
      
    })
  }

  ngOnInit() {
    // this.alt.getDatta().subscribe(data => {
    //   console.log(data);
    //   this.users = data;
    // })
  }

}
