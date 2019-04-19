import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { UploadPhotosService } from '../../services/upload-photos.service';


@Component({
  selector: 'app-upload-photos',
  templateUrl: './upload-photos.component.html',
  styleUrls: ['./upload-photos.component.css']
})
export class UploadPhotosComponent implements OnInit {
  @Output() onClose: EventEmitter<any> = new EventEmitter();
  @Output() onUploadEnd: EventEmitter<any> = new EventEmitter();
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
    this.onClose.emit();
  }
/**
 * метод поєднання декількох файлів для завантаження
 * @param input - поле вводу даних
 */
  addPhotos(input) {
    this.photosArray = this.photosArray.concat(...input.files);
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
    this.toServer.uploadPhotos(this.photosArray).subscribe((res) => {
      this.onUploadEnd.emit();
    });
  }
}
