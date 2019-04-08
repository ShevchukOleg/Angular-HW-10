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
  /** користувач дані якого виведено на сторінку */
  public user: User;
  /** Ідентифікатор */
  public activeId: string;
  /** Поточна активна вкладка */
  public activetab = 'selfies';

  public authUserId: string;

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService,
    private auth: AuthGlobalService
  ) {}

  /**
   * при старті компоненти записуються дінні про поточного користувача на сторінці та
   * робиться запит на отриманя даних про користувача на сервер
   */
  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params.id;
    this.authUserId = this.auth.getUserId;
    this.userService.getUserInfo(this.activeId).subscribe((data: User) => {
      this.user = data;
    });
  }
}
