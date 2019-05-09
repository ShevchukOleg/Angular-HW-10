import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../../../environments/environment';
import { User } from '../interfaces/user';
import { Observable } from 'rxjs';
import { Img } from '../interfaces/img';
import { ImgArray } from '../interfaces/imageArray';
import { ServerResponse } from '../../../globalInterfaces/server-response';
import { map } from 'rxjs/operators';



@Injectable()
export class UserService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient,
  ) { }

  /**
   * метод отримання данних про поточного користувача
   * @param id - ідентифікатор поточного користувача
   */
  public getUserInfo(id: string): Observable<User> {
    return this.http.get<User>(`${this.apiUrl}/public/users/get-info/${id}`);
  }

  /**
   * метод отримання фотографій завантажених коистувачем із вказанним id
   * @param id - ідентифікатор користувача для звантаження фото
   */
  public getUserPhotos(id: string): Observable<Array<Img>> {
    return this.http.get<ImgArray>(`${this.apiUrl}/public/users/my-images/${id}`).pipe(
      map((data: ImgArray) => {
        return data.images;
      })
    );
  }

  public removeImage(userId: string, imageId: string, imageUrl: string): Observable<ServerResponse> {
    const options = {
      headers: {'Content-type': 'application/json'},
      body: JSON.stringify({
        image_id: `${imageId}`,
        image_url: `users-photos/${imageUrl.slice(imageUrl.lastIndexOf('/') + 1)}`
        }),
    };

    console.log(userId, options.body);
    return this.http.delete<ServerResponse>(`${this.apiUrl}/public/users/remove-photo/${userId}`, options );
  }
}
