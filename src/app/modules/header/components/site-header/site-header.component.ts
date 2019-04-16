import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../../auth/services/auth.service';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {
/**
 * отримання данних авторизації користувача з шаблону app.cpmponent.html
 */
  @Input() authUserId: string;
  constructor(
    private auth: AuthService
  ) { }

  ngOnInit() {
  }
  /**
   * матод скидання авторизації
   */
  onLogOut() {
    this.auth.logOut();
  }

}
