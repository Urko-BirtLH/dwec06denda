export class Categoria{									
    // atributos										
    private nombreCategoria : string;														
													
    // constructor										
    constructor(nombreCategoria : string){				
        this.nombreCategoria = nombreCategoria;														
    }												
													
    // metodos											
    public getCategoria() : string {						
        return this.nombreCategoria;					
    }		
    
    
}