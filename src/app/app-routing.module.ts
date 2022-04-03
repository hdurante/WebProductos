import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { ProductoDetalleComponent } from './productos/producto-detalle/producto-detalle.component';
import { ProductoAltaComponent } from './productos/producto-alta/producto-alta.component';

const routes: Routes = [
  { path:'productos', component: ProductosComponent },
  { path:'producto/:id', component: ProductoDetalleComponent },
  { path:'producto-alta', component: ProductoAltaComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
