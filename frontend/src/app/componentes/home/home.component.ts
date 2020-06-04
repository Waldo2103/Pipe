import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Turno } from '../../models/turno';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  @Output() devuelvoTurno: EventEmitter<any> = new EventEmitter<any>();
  turnoDeSacar: Turno;
  constructor() { }

  ngOnInit(): void {

  }

  traerTurno(turno: Turno){
    this.devuelvoTurno.emit(turno)
    this.turnoDeSacar = turno;
  }

}
