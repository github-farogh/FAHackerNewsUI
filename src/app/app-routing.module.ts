import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HackerNewsComponent } from './hacker-news/hacker-news.component';

const routes: Routes = [
  {
    path: '',
    component: HackerNewsComponent,
   },
   {
    path: 'hackernews',
    component: HackerNewsComponent,
   }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
