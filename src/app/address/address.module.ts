import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressListComponent } from './address-list/address-list.component';
import { AddressFormComponent } from './address-form/address-form.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [AddressListComponent, AddressFormComponent],
  imports: [
    CommonModule,
    HttpClientModule
  ],
  exports: [AddressListComponent, AddressFormComponent]
  ]
})
export class AddressModule { }
