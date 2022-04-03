import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import {SharedService} from './shared.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { AltaTelevisionComponent } from './productos/alta-television/alta-television.component';
import { AltaZapatoComponent } from './productos/alta-zapato/alta-zapato.component';
import { AltaLaptopComponent } from './productos/alta-laptop/alta-laptop.component'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,    
    AltaTelevisionComponent,
    AltaZapatoComponent,
    AltaLaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,    
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
