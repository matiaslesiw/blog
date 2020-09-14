export class Usuario {

  id: number;
  nombre: string;
  apellido: string;
  nombreUsuario: string;
  contra: string;
  email: string;
  fechaNacimiento: any;
  descPerfil: string;
  img: string;
  idSeguidos: string[];

  constructor(
    _id?: number,
    _nombre?: string,
    _apellido?: string,
    _nombreUsuario?: string,
    _contra?: string,
    _email?: string,
    _fechaNacimiento?: any,
    _descPerfil?: string,
    _img?: string,
    _seguidos?: string[]) {

    this.id=_id;
    this.nombre=_nombre;
    this.apellido=_apellido
    this.nombreUsuario=_nombreUsuario
    this.contra=_contra;
    this.email=_email;
    this.fechaNacimiento=_fechaNacimiento;
    this.descPerfil=_descPerfil;
    this.img=_img;
    this.idSeguidos =_seguidos;

  }

  static fromJson(archivoJSON): Usuario {
    return Object.assign(new Usuario(), archivoJSON)
}

toJSON(): any {
    return {
        ...this,
    }
}

}
