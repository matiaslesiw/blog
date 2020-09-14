import { Component, Input, OnInit } from '@angular/core';
import { Usuario } from 'src/app/Domain/usuario';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.component.html',
  styleUrls: ['./editar-perfil.component.css']
})
export class EditarPerfilComponent implements OnInit {

  @Input() perfil: Usuario;

  constructor() { }

  ngOnInit() {
  }

}
