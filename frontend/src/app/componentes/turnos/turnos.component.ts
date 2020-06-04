import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { HttpService } from 'src/app/servicios/http.service';
import { Turno } from '../../models/turno';

@Component({
  selector: 'app-turnos',
  templateUrl: './turnos.component.html',
  styleUrls: ['./turnos.component.scss']
})
export class TurnosComponent implements OnInit {
  cantTurnos: any = 0;
  faltaAtender: number = 0;
  atendidos: number = 0;
  atendiendo:any = {turno: "-", cola: "-", atendido: false};
  @Input() turnoN: Turno
  listadoTurnos: Array<Turno> = [];

  constructor(private http: HttpService) { }

  ngOnInit(): void {
  }
  ngOnChanges(){
    this.listadoTurnos.push(this.turnoN);
    this.calcularAtendidos();
    
  }

  calcularAtendidos(){
    
    this.cantTurnos = this.listadoTurnos.length - 1;
    this.faltaAtender = this.cantTurnos - this.atendidos;
  }

  atender(){
    this.http.getAtenderProximo().subscribe(turno =>{
      this.atendiendo = turno;
      ++this.atendidos;
      this.calcularAtendidos();

    },
    error=>{
     
      alert("No quedan turnos por atender");
      console.log(error);
    }
    );
  }

}
