import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { User } from '../../interfaces/user';


@Component({
  selector: 'app-user-background',
  templateUrl: './user-background.component.html',
  styleUrls: ['./user-background.component.css']
})
export class UserBackgroundComponent implements OnInit {
  @Input() user: User;
  @Input() activeId;
  @Input() authUserId;
  @Output() uploadCoverNotice: EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
    console.log(this.user, this.activeId, this.authUserId);
  }

  public uploadCover() {
    this.uploadCoverNotice.emit('cover');
  }
}
