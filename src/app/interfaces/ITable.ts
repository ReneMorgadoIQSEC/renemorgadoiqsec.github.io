export interface TableData {
    nombre: string;
    curp: string;
    correo: string;
    telefono: string;
    fecha_registro: string;
}

export interface IFilterForm {
    search: string;
    dateStart: string;
    dateEnd: string;
}