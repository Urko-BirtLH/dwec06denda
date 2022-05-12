export class Producto{									
    // atributos										
    public idProducto: number;
    public nombreProducto: string;
    public categoria : string;
    public marca : string;												
    public descripcion : string;
    public precio : number;
    public thumbnail : string;
    public fotos : Array<string>;

    
													
    // constructor										
    constructor(idProducto : number, nombreProducto : string, categoria : string, marca : string, descripcion : string, precio : number, thumbnail : string, fotos : Array<string>){				
        this.idProducto = idProducto;
        this.nombreProducto = nombreProducto;
        this.categoria = categoria;
        this.marca = marca;												
        this.descripcion = descripcion;
        this.precio = precio;
        this.thumbnail = thumbnail;
        this.fotos = fotos;													
    }												
													
    // metodos
    // Getters / Setters
        // Todo el producto
        public setProducto(idProducto : number, nombreProducto : string, categoria : string, marca : string, descripcion : string, precio : number, thumbnail : string, fotos : Array<string>) {
            this.idProducto = idProducto;
            this.nombreProducto = nombreProducto;
            this.categoria = categoria;
            this.marca = marca;												
            this.descripcion = descripcion;
            this.precio = precio;
            this.thumbnail = thumbnail;
            this.fotos = fotos;
        }


        // idProducto
        public getIdProducto(): number {
            return this.idProducto;
        }
        public setIdProducto(idProducto: number) {
            this.idProducto = idProducto;
        }

        // nombreProducto
        public getNombreProducto(): string {
            return this.nombreProducto;
        }
        public setNombreProducto(nombreProducto: string) {
            this.nombreProducto = nombreProducto;
        }

        // categoria
        public getCategoria(): string {
            return this.categoria;
        }
        public setCategoria(categoria: string) {
            this.categoria = categoria;
        }

        // marca
        public getMarca(): string {
            return this.marca;
        }
        public setMarca(marca: string) {
            this.marca = marca;
        }

        // descripcion
        public getDescripcion(): string {
            return this.descripcion;
        }
        public setDescripcion(descripcion: string) {
            this.descripcion = descripcion;
        }

        // precio
        public getPrecio(): number {
            return this.precio;
        }
        public setPrecio(precio: number) {
            this.precio = precio;
        }

        // thumbnail
        public getThumbnail(): string {
            return this.thumbnail;
        }
        public setThumbnail(thumbnail: string) {
            this.thumbnail = thumbnail;
        }

        // thumbnail
        public getFotos(): Array<string> {
            return this.fotos;
        }
        public setFotos(fotos: Array<string>) {
            this.fotos = fotos;
        }
    


    



}