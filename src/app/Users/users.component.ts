import { Component, OnInit } from '@angular/core';
import { NewService } from '../services/new.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
user;
  constructor(private Users: NewService) { }

  ngOnInit() {
    this.Users.getUsers().subscribe(data => {
      console.log(data);
      this.user = data;
    })
  }

}
