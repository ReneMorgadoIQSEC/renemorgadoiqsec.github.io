export interface TableData {
    nombres: string;
    apellidoPaterno: string;
    apellidoMaterno: string;
    curp: string;
    correo: string;
    telefono: string;
    claveElector: string;
    anioEmision: string;
    anioRegistro: string;
    numeroEmision: string;
    cic: string;
    firma: string;
    ine: string;
    fecha_registro: string;
}

export interface IFilterForm {
    search: string;
    dateStart: string;
    dateEnd: string;
}