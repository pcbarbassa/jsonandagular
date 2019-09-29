import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GeoListComponent } from './geo-list/geo-list.component';
import { GeoFormComponent } from './geo-form/geo-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [GeoListComponent, GeoFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [GeoListComponent, GeoFormComponent]
  ]
})
export class GeoModule { }
