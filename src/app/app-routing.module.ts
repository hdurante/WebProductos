import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { AltaLaptopComponent } from './productos/alta-laptop/alta-laptop.component';
import { AltaTelevisionComponent } from './productos/alta-television/alta-television.component';
import { AltaZapatoComponent } from './productos/alta-zapato/alta-zapato.component';


const routes: Routes = [
  { path:'productos', component: ProductosComponent },
  { path:'alta-laptop', component: AltaLaptopComponent },
  { path:'alta-television', component: AltaTelevisionComponent },
  { path:'alta-zapato', component: AltaZapatoComponent },  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
