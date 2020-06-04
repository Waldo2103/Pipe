import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './componentes/menu/menu.component';
import { HomeComponent } from './componentes/home/home.component';
import { SacarTurnoComponent } from './componentes/sacar-turno/sacar-turno.component';
import { TurnosComponent } from './componentes/turnos/turnos.component';

import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpService } from './servicios/http.service';
import { HttpClient, HttpHandler, HttpClientModule } from '@angular/common/http';
import { PrincipalComponent } from './componentes/clima/principal/principal.component';
import { ActualComponent } from './componentes/clima/actual/actual.component';
import { HistoricoComponent } from './componentes/clima/historico/historico.component';
import { PeriodoComponent } from './componentes/clima/periodo/periodo.component';
import { PronosticoComponent } from './componentes/clima/pronostico/pronostico.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    SacarTurnoComponent,
    TurnosComponent,
    PrincipalComponent,
    ActualComponent,
    HistoricoComponent,
    PeriodoComponent,
    PronosticoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule
  ],
  providers: [
    HttpService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
