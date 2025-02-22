import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Usuario } from '../models/usuario';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  apiBase = '';

  constructor(private _http: HttpClient) {
    this.apiBase = environment.urlApiBase + 'usuario';
  }
  getUsuarios(): Observable<Usuario[]> {
    return this._http.get<Usuario[]>(this.apiBase + '/')
  }
  postUsuarios(usr: Usuario): Observable<boolean> {
    return this._http.post<boolean>(this.apiBase + '/add', usr)
  }
  deleteUsuarios(id: number): Observable<boolean> {
    return this._http.delete<boolean>(this.apiBase + '/' + id,)
  }
  putUsuarios(usr: Usuario): Observable<boolean> {
    return this._http.put<boolean>(this.apiBase + '/' + usr.id, usr)
  }
}