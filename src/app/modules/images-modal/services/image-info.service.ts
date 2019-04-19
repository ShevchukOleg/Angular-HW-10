import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../../environments/environment';
import { Observable } from 'rxjs';
import { ImageData } from '../interfaces/imageData';

@Injectable({
  providedIn: 'root'
})
export class ImageInfoService {

  private apiUrl: string = environment.apiUrl;

  constructor(
    private http: HttpClient
  ) { }
    /**
     * метод отримання даних про обране зображення
     */
  public getPhotoInfo(imageId: string): Observable<ImageData> {
    return this.http.get<ImageData>(`${this.apiUrl}/public/users/image-info/${imageId}`);
  }
}
