import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';

@Component({
  selector: 'app-alta-television',
  templateUrl: './alta-television.component.html',
  styleUrls: ['./alta-television.component.css']
})
export class AltaTelevisionComponent implements OnInit {

  public formProducto : FormGroup;

  constructor(private formBuilder:FormBuilder, private service:SharedService) {
    this.formProducto = this.formBuilder.group( {
     });
   }

  ngOnInit(): void {
    this.formProducto = this.formBuilder.group( {      
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],
      sku:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],
      marca:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],      
      costo:['',[Validators.required,Validators.minLength(1),Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]],
      tipoPantalla:['LED'],
      tamanoPantalla:['',[Validators.required,Validators.minLength(1)]],	
     });
  }

  send():any{
    console.log(this.formProducto.value);
    this.service.guardarProducto(this.formProducto.value).subscribe(data=>{
      console.log('Se guardo el producto');
    });

  }
}
