import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosFormComponent } from './todos-form/todos-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [TodosListComponent, TodosFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [TodosListComponent, TodosFormComponent]
})
export class TodosModule { }
