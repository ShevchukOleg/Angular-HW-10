import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AuthGlobalService } from 'src/app/services/auth-global.service';
import { environment } from './../../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UploadPhotosService {
  private apiUrl: string = environment.apiUrl;

  constructor(
    public http: HttpClient,
    public authService: AuthGlobalService
  ) { }

  uploadPhotos(photos) {
    const formData = new FormData();
    photos.forEach((photo) => formData.append('userPhotos', photo));

    return this.http.post(`${this.apiUrl}/public/users/upload-photos/${this.authService.getUserId}`, formData);
  }

  uploadCover(file) {
    const formData = new FormData();
    formData.append('coverImg', file);
    return this.http.post(`${this.apiUrl}/public/users/upload-cover/${this.authService.getUserId}`, formData);
  }

  uploadAvatar(file) {
    console.log('Метод в розробці, принято на відправку:', file);
  }

  uploadUserData(descriptor: string, file, filesArr) {
    switch (descriptor) {
      case 'avatar':
      console.log('Метод в розробці, принято на відправку:', file);
      break;
      case 'cover':
      const formData = new FormData();
      formData.append('coverImg', file);
      return this.http.post(`${this.apiUrl}/public/users/upload-cover/${this.authService.getUserId}`, formData);
      case 'userImage':
      const formdata = new FormData();
      filesArr.forEach((photo) => formdata.append('userPhotos', photo));
      return this.http.post(`${this.apiUrl}/public/users/upload-photos/${this.authService.getUserId}`, formdata);
    }
  }
}
