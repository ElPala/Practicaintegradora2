export class Product {
    uid: number;
    nombre: string;
    marca: string;
    descripcion: string;
    precio: number;
    existencia: number;
    especificacion: Especificacion[];
    monitorear: boolean;
    constructor(uid: number,
                nombre: string,
                marca: string,
                descripcion: string,
                precio: number,
                existencia: number,
                especificacion: Especificacion[],
                monitorear: boolean) {
        this.uid = uid;
        this.nombre = nombre;
        this.marca = marca;
        this.descripcion = descripcion;
        this.precio = precio;
        this.existencia = existencia;
        this.especificacion = especificacion;
        this.monitorear = monitorear;
    }
}

export class Especificacion {
    atributo: string;
    valor: string;
    unidad: string;
    constructor(atributo: string, valor: any, unidad: string) {
        this.atributo = atributo;
        this.valor = valor;
        this.unidad = unidad;
    }
}
