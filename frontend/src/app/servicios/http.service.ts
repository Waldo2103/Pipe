import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class HttpService {
  private apiUrl = 'http://localhost:8080/api';  // URL to web api
  private usuarios = 'usuarios';
  private sacarTurno = 'sacar_turno';
  private atenderProximo = 'atender_proximo';
  private turnos = 'turnos';
  constructor( 
    private http: HttpClient
  ) { }

  getUsuario(){
    const url =  `${this.apiUrl}/${this.usuarios}`
    return this.http.get(url)
  }

  getTurnos(){
    const url =  `${this.apiUrl}/${this.turnos}`
    return this.http.get(url)
  }
  
  getSacarTurno(id: string){
    const url = `${this.apiUrl}/${this.sacarTurno}/${id}`;
    return this.http.get(url);
  }

  getAtenderProximo(){
    const url = `${this.apiUrl}/${this.atenderProximo}`;
    return this.http.get(url)
  }
  
}