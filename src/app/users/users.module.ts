import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UsersFormComponent } from './users-form/users-form.component';
import { HttpClientModule } from '@angular/common/http';



@NgModule({
  declarations: [UsersListComponent, UsersFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports:[UsersListComponent, UsersFormComponent]
})
export class UsersModule { }
