import { Component, OnInit, Input } from '@angular/core';
import { Usuario } from 'src/app/Domain/usuario';

@Component({
  selector: 'app-perfil-destacado',
  templateUrl: './perfil-destacado.component.html',
  styleUrls: ['./perfil-destacado.component.css']
})
export class PerfilDestacadoComponent implements OnInit {

  @Input() perfil: Usuario;

  constructor() { }

  ngOnInit() {

  }

}
