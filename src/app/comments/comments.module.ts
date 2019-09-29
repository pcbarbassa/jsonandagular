import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommentsListComponent } from './comments-list/comments-list.component';
import { CommentsFormComponent } from './comments-form/comments-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [CommentsListComponent, CommentsFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [CommentsListComponent, CommentsFormComponent]
  ]
})
export class CommentsModule { }
