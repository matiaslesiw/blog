import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  usuario: string;
  contra: string;


  constructor(private router: Router, private mock: MockServiceService) { }

  ngOnInit() {
  }

  loguear() {

    var idUsuario = this.mock.idPorNombreDeUsuario(this.usuario).id

    if(this.mock.login(this.usuario,this.contra) === undefined) {
       alert("Hubo un error iniciando sesion.")
    }

    this.mock.login(this.usuario,this.contra).suscribe(

      this.router.navigate(['/home',idUsuario ])

    )



  }


}
