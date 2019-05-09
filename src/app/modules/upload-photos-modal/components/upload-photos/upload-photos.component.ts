import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadPhotosService } from '../../services/upload-photos.service';


@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Output() uploadEnd: EventEmitter<any> = new EventEmitter();
  public photosArray = [];
  constructor(
    public toServer: UploadPhotosService
  ) { }

  ngOnInit() {
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
      (res) => {
      this.uploadEnd.emit();
    });
  }
}
