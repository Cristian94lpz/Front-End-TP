import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HabilidadDura } from '../models/habilidad-dura';

@Injectable({
  providedIn: 'root'
})
export class HabilidadDuraService {

  portfolioURL = 'http://localhost:8080/portfolio/';

  constructor(private httpClient:HttpClient) { }

  public datosHabDura(id:number):Observable<HabilidadDura>{
    return this.httpClient.get<HabilidadDura>(this.portfolioURL + 'HabilidadesDuras_'+id);
  }

  public update(HabilidadDura:HabilidadDura,id:number):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'editar_habilidaddura_' + id ,HabilidadDura);
  }

}