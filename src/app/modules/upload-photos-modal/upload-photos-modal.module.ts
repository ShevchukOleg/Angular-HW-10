import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPhotosComponent } from './components/upload-photos/upload-photos.component';

@NgModule({
  declarations: [UploadPhotosComponent],
  imports: [
    CommonModule
  ],
  exports: [UploadPhotosComponent]
})
export class UploadPhotosModalModule { }
