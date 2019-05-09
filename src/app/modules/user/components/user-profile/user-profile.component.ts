import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';
import { AuthGlobalService } from '../../../../services/auth-global.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {
  /** користувач, дані якого виведено на сторінку (може не співпадати з авторизованим користувачем)  */
  public user: User;
  /** Ідентифікатор користувача чию сторінку переглядають */
  public activeId: string;
  /** Поточна активна вкладка */
  public activetab = 'selfies';
  /** Ідентифікатор зареєстрованого користувача */
  public authUserId: string;
  /** стан модульного вікна */
  public uploadCoverModalIsOpened = false;

  constructor(
    public activeRoute: ActivatedRoute,
    public userService: UserService,
    public auth: AuthGlobalService
  ) {}

  /**
   * при старті компоненти записуються дінні про поточного користувача на сторінці та
   * робиться запит на отриманя даних про користувача на сервер
   */
  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params.id;
    this.authUserId = this.auth.getUserId;
    this.getUserInfo(this.activeId);
  }
/**
 * getUserInfo - метод отримання данних про користувача за ідентифікатором
 * @param userId - ідетнифікатор користвувача, чиї дані хочемо переглянути на сторінці
 */
  public getUserInfo(userId: string) {
    this.userService.getUserInfo(userId).subscribe(
      (data) => this.user = data
    );
  }
  /**
   * uploadCover - метод для зміни тла сторінки
   */
  public uploadCover() {
    console.log('New cover!');
    this.uploadCoverModalIsOpened = true;
  }
}
