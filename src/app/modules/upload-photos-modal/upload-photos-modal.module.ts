import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UploadPhotosComponent } from './components/upload-photos/upload-photos.component';
import { MultiplyAtributeSwitchDirective } from './directives/multiply-atribute-switch.directive';

@NgModule({
  declarations: [UploadPhotosComponent, MultiplyAtributeSwitchDirective],
  imports: [
    CommonModule
  ],
  exports: [UploadPhotosComponent]
})
export class UploadPhotosModalModule { }
