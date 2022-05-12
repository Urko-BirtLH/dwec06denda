import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { Categoria } from '../models/Categoria';
import { CategoriasService } from '../services/categorias.service';
import { ProductosComponent } from '../productos/productos.component';


@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.scss'],
  providers: [CategoriasService]
})
export class CategoriasComponent implements OnInit {

  public categorias: Array<Categoria>=[];
  private _router: Router;
  private componenteProducto : ProductosComponent;

  constructor( private _categoriasService : CategoriasService, _router: Router, componenteProducto : ProductosComponent ) {
    this._router = _router;
    this.componenteProducto = componenteProducto
  }

  ngOnInit(): void {
    this.categorias = this._categoriasService.getCategorias();

  }

  filtrar(categoria : string) {
    this._router.navigate(['/productos/' + categoria]);
    // this.componenteProducto.readCategoria(categoria);
  }

  


}
