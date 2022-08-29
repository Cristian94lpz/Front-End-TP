import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarioURL = 'http://localhost:8080/hola/'

  constructor(private httpClient:HttpClient) { }

  public verificar(Usuario:Usuario):Observable<any>{
    return this.httpClient.post<any>(this.usuarioURL + 'iniciar-sesion',Usuario);

  }

}
