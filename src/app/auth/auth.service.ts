import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, ObservedValueOf } from 'rxjs';
import { environment } from 'src/environments/environment';
import { LoginDTO, TokenDTO } from 'src/interface/dto/auth.dto';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private httpClient: HttpClient
  ) { }

  login(data: LoginDTO): Observable<TokenDTO> {
    return this.httpClient.post<TokenDTO>(`${environment.serverUrl}/auth/login`, data);
  }
}
