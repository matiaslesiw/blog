import { Component, OnInit } from '@angular/core';
import { MockServiceService } from 'src/app/Services/mock-service.service';
import { Usuario } from 'src/app/Domain/usuario';
import { Posteo } from 'src/app/Domain/posteo';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  usuarios: Usuario[];
  posteos: Posteo[];
  filas: number[] = [0 ,3 ,6];
  usuarioLogueado: Usuario;


  constructor(private mock: MockServiceService, private route : ActivatedRoute) {

  }

  async ngOnInit() {

    this.usuarios = await this.mock.getUsuarios();
    this.posteos = await this.mock.getPosteos();

    this.route.params.subscribe(params => {
      this.usuarioLogueado = this.mock.getUsuario(Number(params['id']))

    })

  }

  unPosteo(i){
    return this.posteos[i];
  }

  unPerfilDestacado (){
    return this.usuarios[Math.floor(Math.random() * this.usuarios.length)];
  }

  unPosteoDestacado(){
    return this.posteos[Math.floor(Math.random() * this.posteos.length)];
  }




}
