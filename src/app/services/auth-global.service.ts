import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthGlobalService {
  private jwtHelper: JwtHelperService = new JwtHelperService();
  constructor() {}
  /**
   * отримання токену користувача що залогінився
   */
  get getToken() {
    return localStorage.getItem('mlp_client_token');
  }
  /**
   * отримання ідениифікатору через розшифровку токену,
   * у випадку відсутності токену поверне null
   */
  get getUserId() {
    return this.getToken ? this.jwtHelper.decodeToken(this.getToken).id : null;
  }

  /**
   * метод перевірки актуаьності токену
   */
  public isTokenExpired() {
    return this.jwtHelper.isTokenExpired(this.getToken);
  }
}
