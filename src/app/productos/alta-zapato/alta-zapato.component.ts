import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-alta-zapato',
  templateUrl: './alta-zapato.component.html',
  styleUrls: ['./alta-zapato.component.css']
})
export class AltaZapatoComponent implements OnInit {

  public formProducto : FormGroup;

  constructor(private formBuilder:FormBuilder, private service:SharedService, private router: Router) {
    this.formProducto = this.formBuilder.group( {
     });
   }

  ngOnInit(): void {
    this.formProducto = this.formBuilder.group( {      
      nombre:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],
      sku:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],
      marca:['',[Validators.required,Validators.minLength(3),Validators.maxLength(64)]],      
      costo:['',[Validators.required,Validators.minLength(1),Validators.pattern('\\-?\\d*\\.?\\d{1,2}')]],
      material:['Piel'],
      numero:['',[Validators.required,Validators.minLength(1)]],	
     });
  }

  send():any{
    console.log(this.formProducto.value);
    this.service.guardarProducto(this.formProducto.value).subscribe(data=>{
      console.log('Se guardo la televisión');
      this.router.navigateByUrl('/productos');
    });

  }
}
