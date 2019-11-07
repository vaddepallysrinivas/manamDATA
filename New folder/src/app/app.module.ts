import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuModule } from '../menu/menu.module';
  import { from } from 'rxjs';
import { HeaderModule } from 'src/header/header.module';
import { AdvertiseModule } from 'src/advertise/advertise.module';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MenuModule,
    HeaderModule,
    AdvertiseModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
