import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlbunsListComponent } from './albuns-list/albuns-list.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [AlbunsListComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AlbunsListComponent, AlbunsFormComponent]
  ]
})
export class AlbunsModule { }
