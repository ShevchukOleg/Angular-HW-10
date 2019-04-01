import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGlobalService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() {}
  get getToken() {
    return localStorage.getItem('mlp_client_token');
  }
  get getUserId() {
    return this.jwtHelper.decodeToken(this.getToken)['id'];
  }
  public isTokenExpired() {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }
}
