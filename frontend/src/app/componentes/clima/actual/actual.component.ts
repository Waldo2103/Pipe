import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { ClimaService } from 'src/app/servicios/clima.service';

@Component({
  selector: 'app-actual',
  templateUrl: './actual.component.html',
  styleUrls: ['./actual.component.scss']
})
export class ActualComponent implements OnInit {

  @Input() datos: string;
  
  ubicacion: any;
  clima: any = {
    temp: '',
    sensa: '',
    hume: '',
    preci: '',
    descriCli: '',
    descriIcon: ''
  }
  error: boolean;
  constructor(private climaServ: ClimaService) { }

  ngOnInit(): void {
    
  }
  ngOnChanges(){
      if ( this.datos != '') {
        this.getActual();
      }else{
        alert("La ciudad solicitada no existe")
        console.log("d", this.datos)
      }
  }

  getActual(){
    this.climaServ.getClima('current', this.datos).subscribe(res =>{
      try {
      this.ubicacion = res.request.query;
      let clim = res.current;
      this.clima = 
      {
        temp: clim.temperature,
        sensa: clim.feelslike,
        hume: clim.humidity,
        preci: clim.precip,
        descriCli: clim.weather_descriptions[0],
        descriIcon: clim.weather_icons[0]
      }
      res.current.temperature;
      this.error = false;
      } catch (error) {
        console.log(error)
        this.error = true;
      alert("La ciudad seleccionada no existe!");
      }
      
    });
  }

}
