import { Usuario } from './usuario';

export class Posteo {

  id: number;
  imagen: string;
  titulo: string;
  desc: string;
  cuerpoPosteo: string;
  fechaPublicacion: any;
  usuario: number;


constructor(_id?:number, _imagen?: string, _titulo?: string, _desc?: string,
    _cuerpoPosteo?: string, _fecha?: any, _usuario?: number) {

    this.id=_id;
    this.imagen = _imagen;
    this.titulo= _titulo;
    this.desc= _desc;
    this.cuerpoPosteo= _cuerpoPosteo;
    this.fechaPublicacion = _fecha;
    this.usuario= _usuario;

  }

  static fromJson(archivoJSON): Posteo {
    return Object.assign(new Posteo(), archivoJSON)
}

toJSON(): any {
    return {
        ...this,
    }
}

}
