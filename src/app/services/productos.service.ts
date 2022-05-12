import { Injectable } from "@angular/core";
import{HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from "rxjs";

@Injectable()
export class ProductosService{

    public url: string;

    constructor( public _http : HttpClient){
        // Otra API:: 3.2. Realización de Consulta HTTP a una API
        this.url="https://dummyjson.com/products/";

    }

    Create(producto : any) : Observable<any> {
        return this._http.post<any>(this.url + "add", producto);
    }

    Read () : Observable<any> {
        return this._http.get(this.url);
    }

    ReadCategoria (categoria : string) : Observable<any> {
        return this._http.get(this.url + "/category/" + categoria);
    }

    Update(idProducto : number, datos : any) : Observable<any> {
        return this._http.put(this.url + idProducto, datos);
    }

    Delete(idProducto : number) : Observable<any> {
        return this._http.delete(this.url + idProducto);
    }

}