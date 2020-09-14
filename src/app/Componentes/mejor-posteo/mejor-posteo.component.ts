import { Component, Input, OnInit } from '@angular/core';
import { Posteo } from 'src/app/Domain/posteo';

@Component({
  selector: 'app-mejor-posteo',
  templateUrl: './mejor-posteo.component.html',
  styleUrls: ['./mejor-posteo.component.css']
})
export class MejorPosteoComponent implements OnInit {

  @Input() posteo: Posteo;

  constructor() { }

  ngOnInit() {
  }

  resumen() {
    return this.posteo.cuerpoPosteo.substring(0,100) + "..." ;
  }

}
