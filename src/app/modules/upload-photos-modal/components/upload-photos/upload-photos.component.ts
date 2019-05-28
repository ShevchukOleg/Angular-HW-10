import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadPhotosService } from '../../services/upload-photos.service';
import { MessageService } from 'primeng/api';
import { ServerResponseOnImagePost } from '../../../../globalInterfaces/server-response-on-image-post';

@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() uploadEnd: EventEmitter<any> = new EventEmitter();
  @Input() uploadImageType: string;
  public photosArray = [];
  public uploadImage: any;
  // !! public type: string; для варіанту з ngSwitch

  constructor(
    public toServer: UploadPhotosService,
    public messageService: MessageService
  ) { }

  /**
   * оскільки варіант з директивою не реалізовано, доводиться керувати відображенням різних
   * темплейтів через NgSwitch і переприсвоєння параметрів при запуску класу компоненти
   */
  ngOnInit() {
    console.log('Ініціалізація класу компоненти', this.uploadImageType, Date.now());
  }
  /**
   * метод закриття модального вікна
   */
  closeModal() {
    this.close.emit();
  }
/**
 * метод поєднання декількох файлів для завантаження, що виключає дублі
 * (очікується дооплацювання методу генерації масіву даних з огляду на різні типи відвантажень)
 * @param input - поле вводу даних
 */
  addPhotos(input) {
    if (this.uploadImageType === 'avatar' || this.uploadImageType === 'cover') {
      const [newImage] = input.files;
      this.uploadImage = newImage;
      console.log(this.uploadImageType, this.uploadImage);
    }  else {
      this.photosArray = this.clearDuplicate(this.photosArray.concat(...input.files));
      console.log(this.uploadImageType, this.photosArray);
    }
  }
  /**
   * clearDuplicate - метод фільтрації від повторень
   * @param arr - масив данних з ймовірними повторенями
   */
  public clearDuplicate(arr: Array<any>) {
    let resArr = [];
    let obj = {};
    let baseArrayLength: number = arr.length;

    for (let i = 0; i < baseArrayLength; ++i) {
      obj[arr[i].name] = arr[i];
    }

    for (let key in obj) {
      if (obj.hasOwnProperty(key)) {
        resArr.push(obj[key]);
      }
    }

    return resArr;
  }
/**
 * метод видалення зайвого обраного фото
 * @param name - ім'я зображення що видаляється
 */
  deletePhoto(name) {
    if (this.uploadImageType === 'userImage') {
      this.photosArray = this.photosArray.filter((photo) => photo.name !== name);
    } else {
      this.uploadImage = undefined;
    }
  }

  /**
   * відвантаження данних на сервер через сервіс
   */
  uploadPhotos() {
    if (this.photosArray.length || this.uploadImage) {
      this.toServer.uploadUserData(this.uploadImageType, this.uploadImage, this.photosArray).subscribe((res: ServerResponseOnImagePost) => {
        if (!res.error) {
          this.messageService.add({severity: 'success', summary: 'Server response:', detail: res.message});
          this.uploadEnd.emit();
        } else {
          this.messageService.add({severity: 'error', summary: 'Server response:', detail: res.message});
          this.uploadEnd.emit();
        }
      },
      (error) => console.log(error)
    );
    } else {
            this.messageService.add({severity: 'error', summary: 'Aplication notification:', detail: 'No data was uploaded'});
            this.uploadEnd.emit();
      }
  }
}
