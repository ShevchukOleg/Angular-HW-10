import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ImageInfoModalComponent } from './components/image-info-modal/image-info-modal.component';

@NgModule({
  declarations: [ImageInfoModalComponent],
  imports: [
    CommonModule
  ],
  exports: [ImageInfoModalComponent]
})
export class ImagesModalModule { }
