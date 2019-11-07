import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdvertiseComponent } from './advertise.component';



@NgModule({
  declarations: [AdvertiseComponent],
  imports: [
    CommonModule
  ],
  exports:[
    AdvertiseComponent
  ]
})
export class AdvertiseModule { }
