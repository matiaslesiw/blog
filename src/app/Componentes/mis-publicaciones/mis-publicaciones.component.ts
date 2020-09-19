import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Posteo } from 'src/app/Domain/posteo';
import { Usuario } from 'src/app/Domain/usuario';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {

  usuario: Usuario;
  posteos: Posteo[];
  filas: number[] = [0, 3];

  constructor(private mock: MockServiceService, private route: ActivatedRoute) {

  }

  async ngOnInit() {

    this.route.params.subscribe(params => {

      this.usuario = this.mock.getUsuario(Number(params['id']))
      this.posteos = this.mock.posteosPorIdUsuario(Number(params['id']))

    })


    console.log(this.filas)

  }

  unPosteo(i) {
    return this.posteos[i];
  }

  existePosteo(fila) {
    if (this.posteos[fila] !== undefined) {
      return true
    } else return false
  }
}
