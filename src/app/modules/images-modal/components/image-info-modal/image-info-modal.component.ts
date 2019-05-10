import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { ImageInfoService } from '../../services/image-info.service';
import { ImageData } from '../../interfaces/imageData';

@Component({
  selector: 'app-image-info-modal',
  templateUrl: './image-info-modal.component.html',
  styleUrls: ['./image-info-modal.component.css']
})
export class ImageInfoModalComponent implements OnInit {
  @Input() imageId: string;
  @Output() close: EventEmitter<any> = new EventEmitter();
  public fullImageInfo: ImageData;

  constructor(
    private imageInfoService: ImageInfoService
  ) { }

  ngOnInit() {
    this.loadImageInfo();
  }
/**
 * метод для заватнаження через срвіс даних про обране зображення
 */
  public loadImageInfo() {
    this.imageInfoService.getPhotoInfo(this.imageId).subscribe((image: ImageData) => {
      this.fullImageInfo = image;
    });
  }
  /**
   * метод закриття модального вікна через перечаду події в батьківську компоненту
   */
  public closeModal() {
    this.close.emit();
  }
}
