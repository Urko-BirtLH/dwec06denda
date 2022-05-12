import { Component, OnInit } from '@angular/core';

import { ProductosService } from '../services/productos.service';
import { ProductosComponent } from '../productos/productos.component';
import { CategoriasComponent } from '../categorias/categorias.component';
import { CategoriasService } from '../services/categorias.service';


@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss'],
  providers: [ProductosService, ProductosComponent, CategoriasComponent, CategoriasService]
})
export class InicioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
