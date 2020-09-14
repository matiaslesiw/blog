import { Component, OnInit, Input } from '@angular/core';
import { Posteo } from 'src/app/Domain/posteo';

@Component({
  selector: 'app-posteo',
  templateUrl: './posteo.component.html',
  styleUrls: ['./posteo.component.css']
})
export class PosteoComponent implements OnInit {

  @Input() posteo: Posteo;


  constructor() { }

  ngOnInit() {

  }

  imagen(){
    return this.posteo.imagen
  }

}
