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
  public isMultiple = 'multiple';

  constructor(
    public toServer: UploadPhotosService,
    public messageService: MessageService
  ) { }

  ngOnInit() {
    console.log(this.uploadImageType);
  }
  /**
   * метод закриття модального вікна
   */
  closeModal() {
    this.close.emit();
  }
/**
 * метод поєднання декількох файлів для завантаження, що виключає дублі
 * @param input - поле вводу даних
 */
  addPhotos(input) {
    // потрібно покращити метод
    // this.photosArray = this.photosArray.filter((file, index, self) => {
    //   return self.indexOf(file) === index;
    // });

    function clearDuplicate(arr: Array<any>) {
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

    this.photosArray = clearDuplicate(this.photosArray.concat(...input.files));
  }
/**
 * метод видалення зайвого обраного фото
 * @param name - ім'я зображення що видаляється
 */
  deletePhoto(name) {
    this.photosArray = this.photosArray.filter((photo) => photo.name !== name);
  }
  /**
   * відвантаження данних на сервер через сервіс
   */
  uploadPhotos() {
    this.toServer.uploadPhotos(this.photosArray).subscribe(
      (res: ServerResponseOnImagePost) => {
        if (!res.error) {
          this.uploadEnd.emit();
          this.messageService.add({severity: 'success', summary: 'Server response:', detail: res.message});
        } else {
          this.messageService.add({severity: 'error', summary: 'Server response:', detail: res.message});
        }
    },
    (error) => console.log(error)
    );
  }
}
