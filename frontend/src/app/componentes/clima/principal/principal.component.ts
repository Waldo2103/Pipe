import { Component, OnInit, Output } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Clima } from '../../../models/clima';
import { EventEmitter } from 'protractor';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

  ciudad: string;
  actual: boolean = false;
  datos: string = '';

  constructor() {
   }

  ngOnInit(): void {
  }

  traerClima(){
    this.datos = this.ciudad.replace(' ', '%20');
    

    if (this.datos != '') {
      this.actual = true;
    } else {
      this.actual = false;
    }
  }


}
