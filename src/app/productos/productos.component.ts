import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

import { ProductosService } from '../services/productos.service';
import { CategoriasService } from '../services/categorias.service';
import { Producto } from '../models/Producto';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrls: ['./productos.component.scss'],
  providers: [ProductosService, CategoriasService]
})
export class ProductosComponent implements OnInit {
  
  private _route: ActivatedRoute;	
  private _router: Router;
  public categoria_param:string = "";
  public filtrado : boolean;
  public servicioCategoria : CategoriasService;
  productos : Array<Producto> = [];
  nombres : Array<string> = [];
  

  constructor(private _consultaProducto: ProductosService, _route: ActivatedRoute, _router: Router, servicioCategoria : CategoriasService ) { 
    this._route = _route;						
    this._router = _router;
    this.filtrado = false;
    this.servicioCategoria = servicioCategoria;
  }

  ngOnInit(): void {
    this._route.params.subscribe(( params : Params)=>{
      console.log("Parametros recibidos URL:", params);
      this.categoria_param = params["categoria"];
      if (this.categoria_param == undefined) {
        this.filtrado = false;
      } else  {
        this.filtrado = true;
      }

      /* 
      if (this.categoria_param == undefined) {
        this.filtrado = false;
      } else if (this.servicioCategoria.categoriaExiste(this.categoria_param)) {
        this.filtrado = true;
      } else {
        this._router.navigate(['/404']);
      }
      */

    });

    this.create(),		
    this.read();	
    this.update();		
    this.delete();
    
  }

  create() : void {
    let producto : any = {
      "name" : "Iker",
      "job" : "profesor"
    };

    this._consultaProducto.Create(producto).subscribe({
      next : data => {
        console.log("Create", data);
      },
      error : error => {
        console.log("Create Error", error);
      }
    });
  }

  read() : void {
    this._consultaProducto.Read().subscribe({
      next : data => {
         for (const prod of data.products) {            
           let producto = new Producto(prod.id, prod.title, prod.category, prod.brand, prod.description, prod.price, prod.thumbnail, prod.images);
           this.productos.push(producto);
         } 
      },
      error : error => {
        console.log("Read Error", error);
      }
    });
    
    setTimeout(() =>  {
      for (const i of this.productos) {
        this.nombres.push(i.nombreProducto);
      }
    }, 1000);
  }

  readCategoria(categoria : string) : void {
    this.filtrado = true;
    this._consultaProducto.ReadCategoria(categoria).subscribe({
      next : data => {
        console.log("Read", data);
        
      },
      error : error => {
        console.log("Read Error", error);
      }
    });
    
  }

  update() : void {
    let usuario : any = {
       
    };

    this._consultaProducto.Update(3, usuario).subscribe({
      next : data => { 
        console.log("Update", data);
        
      },
      error : error => {
        console.log("Update Error", error);
      }
    });
  }

  delete() : void {
    this._consultaProducto.Delete(5).subscribe({
      next : data => {
        console.log("Delete", data);
        
      },
      error : error => {
        console.log("Delete Error", error);
      }
    });
  }
}
