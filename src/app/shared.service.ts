import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  readonly urlApiProductos = "http://172.21.221.126:3000"
  
  constructor(private http:HttpClient) { }

  obtenerProductos():Observable<any[]>{
        return this.http.get<any[]>(this.urlApiProductos+'/obtenerProductos')
     }

  guardarProducto(val:any){
        return this.http.post(this.urlApiProductos+'/guardar/',val)
    }
}
