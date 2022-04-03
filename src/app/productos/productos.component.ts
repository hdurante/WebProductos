import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.css']
})
export class ProductosComponent implements OnInit {

  constructor(private service:SharedService) { }

  Productos :any=[];

  ngOnInit(): void {
    this.obtenerProductos();
  }

  obtenerProductos(){
    this.service.obtenerProductos().subscribe(data=>{
      console.log('Se solicitaton los productos');
      this.Productos=data;
    });
  }

}
