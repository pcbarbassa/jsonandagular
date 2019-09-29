import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosListComponent } from './photos-list/photos-list.component';
import { PhotosFormComponent } from './photos-form/photos-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [PhotosListComponent, PhotosFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [PhotosListComponent, PhotosFormComponent]
  ]
})
export class PhotosModule { }
