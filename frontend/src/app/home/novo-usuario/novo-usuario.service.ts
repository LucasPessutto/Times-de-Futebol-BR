import { environment } from './../../../environments/environment';
import { NovoUsuario } from './novo-usuario';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class NovoUsuarioService {
  constructor(private http: HttpClient) {}

  registro(user: NovoUsuario): Observable<NovoUsuario> {
    return this.http.post<NovoUsuario>(
      `${environment.api_url}/auth/registro`,
      user
    );
  }
}
