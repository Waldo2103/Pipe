import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  constructor(public http: HttpClient) { }
  private url = 'http://api.weatherstack.com/';
  private key = '?access_key=bd0dd673cea038e9eadf3650057ba553&query=';

  public getClima (metodo: string, ciudad:string, histDateStar?:string,histDateEnd?:string ): Observable<any> 
  {
    //El servicio es escalable, en el caso de ampliar funcionalidad de API soporta los diferentes metodos
    if (histDateStar != undefined) {
      histDateStar = '&historical_date_start=' + histDateStar
      if (histDateEnd != undefined) {
        histDateEnd = '&historical_date_end=' + histDateEnd
        return this.http.get( this.url + metodo + this.key + ciudad + histDateStar + histDateEnd )
      .pipe( res => res);
      }else{
        return this.http.get( this.url + metodo + this.key + ciudad + histDateStar)
        .pipe( res => res);
      }
    }
    //Por el momento solo utiliza esta
    return this.http.get( this.url + metodo + this.key + ciudad)
      .pipe( res => res);
  }
}
