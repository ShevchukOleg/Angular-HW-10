import { Component, OnInit, Input, Output,  EventEmitter } from '@angular/core';
import { ImageInfoService } from '../../services/image-info.service';
import { ImageData } from '../../interfaces/imageData';
import { MessageService } from 'primeng/api';

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
    private imageInfoService: ImageInfoService,
    private messageService: MessageService
  ) { }

  ngOnInit() {
    this.loadImageInfo();
  }
/**
 * метод для заватнаження через срвіс даних про обране зображення
 */
  public loadImageInfo() {
    this.imageInfoService.getPhotoInfo(this.imageId).subscribe(
      (image: ImageData) => this.fullImageInfo = image,
      (error) => this.messageService.add({severity: 'error', summary: 'Error on server', detail: error.message })
      );
  }
  /**
   * метод закриття модального вікна через перечаду події в батьківську компоненту
   */
  public closeModal() {
    this.close.emit();
  }
}
