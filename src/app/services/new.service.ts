import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NewService {

  constructor(private http: HttpClient ) { }
  getDatta() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts');
   }
   getUsers(){
     return this.http.get('https://jsonplaceholder.typicode.com/users')
    }
    getUsersDetails(id){
      return this.http.get('https://jsonplaceholder.typicode.com/users/'+id)

   }
   getUserspost(id){
    return this.http.get('https://jsonplaceholder.typicode.com/posts?userId='+id)

 }
 getPostsComments(id){
  return this.http.get('https://jsonplaceholder.typicode.com/comments?postId='+id)

}

}
