import { Component, OnInit, Input } from '@angular/core';
import { Img } from '../../interfaces/img';
import { ImgArray } from '../../interfaces/imageArray';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-user-profile-images',
  templateUrl: './user-profile-images.component.html',
  styleUrls: ['./user-profile-images.component.css']
})
export class UserProfileImagesComponent implements OnInit {
    /**
     * Прийом даних про користувача з батьківської компоненти для відображення
     */
    @Input() userId: string;

    /**
     * Дані про потчного користувача
     */
    @Input() curentUser: string;

    /**
     * перелік зображень користувача для відображення
     */
    public images: Img[];
    public uploadPhotosModalIsOpened = false;


  constructor(
    private userService: UserService,
  ) {}
  /**
   * на етапі старту компоненти запускаэмо метод на заватаженя зображень через сервіс
   */
  ngOnInit() {
    this.getImages();
  }
/**
 * метод отримання зображень користувача з серверу
 */
  getImages() {
    this.userService.getUserPhotos(this.userId).subscribe((imageArray: Img[]) => {
      this.images = imageArray;
      });
  }

}
