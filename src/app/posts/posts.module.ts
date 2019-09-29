import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostsListComponent } from './posts-list/posts-list.component';
import { PostsFormComponent } from './posts-form/posts-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PostsListComponent, PostsFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PostsListComponent, PostsFormComponent]
  ]
})
export class PostsModule { }
