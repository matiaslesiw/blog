import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Domain/usuario';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-seguidos',
  templateUrl: './seguidos.component.html',
  styleUrls: ['./seguidos.component.css']
})
export class SeguidosComponent implements OnInit {

  usuarios: Usuario[] = [];
  usuarioLogueado: Usuario;


  constructor(private mock: MockServiceService, private route: ActivatedRoute) {

  }

  async ngOnInit() {


    this.route.params.subscribe(params => {
      this.usuarioLogueado = this.mock.getUsuario(Number(params['id']))
    })

    for (var i = 0;i < this.usuarioLogueado.idSeguidos.length;i++) {

      this.usuarios[i] = this.mock.getUsuario(this.usuarioLogueado.idSeguidos[i])

    }

  }

}
