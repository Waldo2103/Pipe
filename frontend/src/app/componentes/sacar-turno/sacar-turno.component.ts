import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { HttpService } from 'src/app/servicios/http.service';

@Component({
  selector: 'app-sacar-turno',
  templateUrl: './sacar-turno.component.html',
  styleUrls: ['./sacar-turno.component.scss']
})
export class SacarTurnoComponent implements OnInit {
  colas:any;
  turno:any = {turno: "-", cola: "-"};

  @Output() mandoTurno: EventEmitter<any> = new EventEmitter<any>();

  constructor(
    private http: HttpService
  ) { 
    this.colas = ["A","B","C"];
  }

  public opcionSeleccionada = "0";
  public verSeleccion = "";

  ngOnInit(): void {
  }

  capturar(){
    this.verSeleccion = this.opcionSeleccionada;
  }

  obtenerTurno(){
    this.http.getSacarTurno(this.verSeleccion).subscribe(turno =>{
      this.turno = turno;
      this.mandoTurno.emit(turno)        
    },
    error=>{
      console.log(error)
      alert("La cola seleccionada no está habilitada!");
      this.turno = { turno: "-", cola: "-"}
    }
    );
    
    
    
  }

}
