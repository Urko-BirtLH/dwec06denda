import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from "@angular/common/http";	
import { Observable } from "rxjs";


import { Categoria } from "../models/Categoria";

@Injectable()								
export class CategoriasService {					
    public categorias : Array<Categoria>;
    public url : string;
    			
										
    constructor(public _http : HttpClient) {					
        this.url="https://dummyjson.com/products/categories";
        this.categorias = [];
    }	
    
    // metodos											
    consultaCategorias() : Observable<any> {						
        return this._http.get(this.url);						
    }


    getCategorias() : Array<Categoria> {	
        this.consultaCategorias().subscribe(				
            result =>{									
              // Crear un objeto de tipo Categoria con cada resultado
              // y añadirlo al Array categorias        
              for (const cat of result) {  
                let categoria = new Categoria(cat);
                this.categorias.push(categoria);
              }                      
            },											
            error => {									
              console.log(<any>error);							
            }											
          );
        					
        return this.categorias;						
    }
    /*
    // Comprueba si el parámetro enviado coincide con alguna de las categorías existentes
    categoriaExiste(parametro : string) : boolean{
        let existe = false;
        console.log("Es este tipo" + typeof this.categorias);
        console.log(this.categorias.length);

        
        for (const categoria of this.categorias) {
            console.log("ESta categoria: " + categoria.getCategoria());
        if (categoria.getCategoria() == parametro) {
            existe = true;
            console.log(categoria.getCategoria());
            
        }

        }
        return existe;
    }
    */
}