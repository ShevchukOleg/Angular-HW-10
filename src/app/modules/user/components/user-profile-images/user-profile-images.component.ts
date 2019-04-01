import { Component, OnInit, Input } from '@angular/core';
import { Img } from '../../interfaces/img';
import { ImgArray } from '../../interfaces/imageArray';
import { UserService } from '../../services/user.service';
import { AuthGlobalService } from '../../../../services/auth-global.service';

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
    public curentUser: string;

    /**
     * перелік зображень користувача для відображення
     */
    public images: Img[];


  constructor(
    private userService: UserService,
    private auth: AuthGlobalService
  ) {
    this.curentUser = this.auth.getUserId;
  }
  /**
   * на етапі старту компоненти отримуємо зображення через сервіс
   */
  ngOnInit() {
    this.userService.getUserPhotos(this.userId).subscribe((imageArray: Img[]) => {
      this.images = imageArray;
      }
    );
  }

}
