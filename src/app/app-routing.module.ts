import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PostsComponent } from './posts/posts.component';
import { UsersComponent } from './users/users.component';
import { DetailsComponent } from './details/details.component';
import { CommentsComponent } from './comments/comments.component';

const routes: Routes = [
  {
    path: 'posts',
    component: PostsComponent
    
},
  {
  path: 'users',
  component: UsersComponent ,
}, {
  path: 'users/:id',
  component: DetailsComponent,
},
{
  path: 'posts/:id',
  component: CommentsComponent,
},
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
