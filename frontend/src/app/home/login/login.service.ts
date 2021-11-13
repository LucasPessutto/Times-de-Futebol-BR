import { environment } from './../../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { map, tap } from 'rxjs/operators';
import { Login } from './login';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  private subjUser$: BehaviorSubject<Login | any> = new BehaviorSubject(null);
  private subjLoggedIn$: BehaviorSubject<boolean | any> = new BehaviorSubject(
    false
  );

  constructor(private http: HttpClient) {}

  login(user: Login): Observable<any> {
    return this.http.post<any>(`${environment.api_url}/auth/login`, user).pipe(
      tap((u: Login) => {
        localStorage.setItem('token', u.token);
        this.subjLoggedIn$.next(true);
        this.subjUser$.next(u);
      })
    );
  }

  logout() {
    localStorage.removeItem('token');
    this.subjLoggedIn$.next(false);
    this.subjUser$.next(null);
  }

  // checkValidacao(): boolean | any {
  //   if (
  //     (l: Login) => {
  //       localStorage.setItem('token', l.token);
  //       this.subjLoggedIn$.next(true);
  //       this.subjUser$.next(l);
  //     }
  //   )
  //     return alert('Algo deu errado!');
  // }

  // autenticado(): Observable<boolean> {
  //   const token = localStorage.getItem('token');
  //   if (token && !this.subjLoggedIn$.value) {
  //     return this.checkValidacao();
  //   }
  //   return this.subjLoggedIn$.asObservable();
  // }

  check(): boolean {
    return localStorage.getItem('token') ? true : false;
  }
}
