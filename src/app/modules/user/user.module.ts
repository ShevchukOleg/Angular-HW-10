import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserProfileComponent } from './components/user-profile/user-profile.component';
import { UserService } from './services/user.service';
import { UserProfileImagesComponent } from './components/user-profile-images/user-profile-images.component';
import { UserProfileFavouritesComponent } from './components/user-profile-favourites/user-profile-favourites.component';
import { UserProfileFollowsComponent } from './components/user-profile-follows/user-profile-follows.component';
import { UploadPhotosModalModule } from '../upload-photos-modal/upload-photos-modal.module';
import { ImagesModalModule } from '../images-modal/images-modal.module';
import { UserBackgroundComponent } from './components/user-background/user-background.component';


@NgModule({
  declarations: [UserProfileComponent, UserProfileImagesComponent, UserProfileFavouritesComponent, UserProfileFollowsComponent, UserBackgroundComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    UploadPhotosModalModule,
    ImagesModalModule
  ],
  providers: [UserService]
})
export class UserModule { }
