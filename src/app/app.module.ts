import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';
import { ProductoAltaComponent } from './productos/producto-alta/producto-alta.component';
import {SharedService} from './shared.service'
import {HttpClientModule} from '@angular/common/http'
import { FormsModule,ReactiveFormsModule } from '@angular/forms'

@NgModule({
  declarations: [
    AppComponent,
    ProductosComponent,
    ProductoDetalleComponent,
    ProductoAltaComponent
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
