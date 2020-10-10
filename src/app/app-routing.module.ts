import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {UsersComponent} from './Demo/users/users.component';
import {DetailsComponent} from './Demo/details/details.component';
import {PostsComponent} from './Demo/posts/posts.component';
import {LandingPageComponent} from './landing-page/landing-page.component';

const routes: Routes = [
  {path: '', component: LandingPageComponent},
  { path: 'users', component: UsersComponent},
  { path: 'details/:id', component: DetailsComponent },
  { path: 'posts', component: PostsComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
