import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { TurnosComponent } from './componentes/turnos/turnos.component';
import { PrincipalComponent } from './componentes/clima/principal/principal.component';
import { ActualComponent } from './componentes/clima/actual/actual.component';
import { PronosticoComponent } from './componentes/clima/pronostico/pronostico.component';
import { PeriodoComponent } from './componentes/clima/periodo/periodo.component';
import { HistoricoComponent } from './componentes/clima/historico/historico.component';


const routes: Routes = [
  
  {path: 'home' , component: HomeComponent },
  {path: 'clima' , component: PrincipalComponent },
  {path: '' , redirectTo: '/home', pathMatch: 'full'  },
  {path: '**',redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
