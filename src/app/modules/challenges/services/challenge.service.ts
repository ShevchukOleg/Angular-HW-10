import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Challenges } from '../interfaces/challengeArray';
import { Challenge } from '../interfaces/challenge';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})

export class ChallengeService {
  private apiUrl: string = environment.apiUrl;
  private httpOptions = {
    headers: new HttpHeaders({
      'Content-type': 'application/json'
    })
  };

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * метод отримання із серверу змагань визначеної категорії
   * @param tagType - категорія змагань
   */
  public getChallenges(tagType: string): Observable<Array<Challenge>> {
    /**
     * об'єкт що описує категорію змагань
     */
    const challengeType = {
      active: '0',
      closed: '0'
    };

    /**
     * тригер для вихначення характеристики запиту по категорії замагань
     */
    switch (tagType) {
      case 'Open':
      challengeType.active = '1';
      challengeType.closed = '0';
      break;
      case 'Upcoming':
      challengeType.active = '0';
      challengeType.closed = '0';
      break;
      case 'Closed':
      challengeType.active = '0';
      challengeType.closed = '1';
      break;
    }

    /**
     * змінна параметрів запиту на сервер
     */
    let params = new HttpParams();
    params = params.append('isActive', challengeType.active);
    params = params.append('isClosed', challengeType.closed);
    /**
     * загальні HttpOptions
     */
    const curentOptions = {
      headers: this.httpOptions.headers,
      params
    };

    return this.http.get<Challenges>(`${this.apiUrl}/public/challenges/list`, curentOptions).pipe(
      map((data: Challenges) => {
        return data.challenges;
      }
    ));
  }
}
