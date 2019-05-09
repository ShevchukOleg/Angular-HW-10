import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { Img } from '../../interfaces/img';
import { UserService } from '../../services/user.service';
import { ServerResponse } from '../../../../globalInterfaces/server-response';

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


    @Output() personalDataChanges = new EventEmitter();

    /**
     * перелік зображень користувача для відображення
     */
    public images: Img[];
    public shownImageId: string;
    public uploadPhotosModalIsOpened = false;
    public showImageDataModal = false;


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
    this.personalDataChanges.emit(true);
  }
/**
 * метод що оголошує та активує відкриття вікна данних про обране зображення
 * @param imageId - ідентифікатор обраного зображення
 */
  showImageInfoModal(imageId) {
    this.shownImageId = imageId;
    this.showImageDataModal = true;
  }

  removeImage(imageId: string, imageUrl: string, event: Event) {
    event.stopPropagation();
    this.userService.removeImage( this.userId, imageId, imageUrl).subscribe(
      (res: ServerResponse) => {
        if (!res.error) {
          this.getImages();
          this.personalDataChanges.emit(true);
        }
      },
      (error) => console.log(error)
      );




  }
}
