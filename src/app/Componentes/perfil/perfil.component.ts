import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuario } from 'src/app/Domain/usuario';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-perfil',
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {

  usuario: Usuario ;

  constructor(private mock: MockServiceService, private route : ActivatedRoute) { }

  async ngOnInit() {

    this.route.params.subscribe(params => {

      this.usuario = this.mock.getUsuario(Number(params['id']))

    })
  }

}
