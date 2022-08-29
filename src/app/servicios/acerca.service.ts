import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Acercami } from '../models/acercami';

@Injectable({
  providedIn: 'root'
})
export class AcercaService {

  portfolioURL = 'http://localhost:8080/portfolio/';

  constructor(private httpClient:HttpClient) { }

  

  public descripcion():Observable<Acercami>{
    return this.httpClient.get<Acercami>(this.portfolioURL + 'descripcion');
  }

  public update(Acercami:Acercami):Observable<any>{
    return this.httpClient.put<any>(this.portfolioURL + 'update',Acercami);
  }

}
