import { Component, ElementRef, Input, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Usuario } from 'src/app/Domain/usuario';
import { MockServiceService } from 'src/app/Services/mock-service.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  usuario: Usuario;

  constructor(private elementRef: ElementRef, private mock: MockServiceService, private route : ActivatedRoute){

  }
    ngOnInit(){

    this.elementRef.nativeElement.ownerDocument.body.style.backgroundColor = '#D5EFEA';

    this.route.params.subscribe(params => {
      this.usuario = this.mock.getUsuario(Number(params['id']))
      console.log(this.usuario)
    })

 }


}
