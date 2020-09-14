import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Domain/usuario';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-mis-publicaciones',
  templateUrl: './mis-publicaciones.component.html',
  styleUrls: ['./mis-publicaciones.component.css']
})
export class MisPublicacionesComponent implements OnInit {

  usuario: Usuario ;

  constructor(private mock: MockServiceService, private route : ActivatedRoute) { }

  async ngOnInit() {

    this.route.params.subscribe(params => {

      this.usuario = this.mock.getUsuario(Number(params['id']))

    })
  }
}
