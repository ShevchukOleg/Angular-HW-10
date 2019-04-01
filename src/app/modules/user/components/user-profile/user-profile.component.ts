import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UserService } from '../../services/user.service';
import { User } from '../../interfaces/user';

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

  constructor(
    private activeRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  /**
   * при старті компоненти записуються дінні про поточного користувача на сторінці та
   * робиться запит на отриманя даних про користувача на сервер
   */
  ngOnInit() {
    this.activeId = this.activeRoute.snapshot.params['id'];
    this.userService.getUserInfo(this.activeId).subscribe((data: User) => {
      this.user = data;
    });
  }
}
