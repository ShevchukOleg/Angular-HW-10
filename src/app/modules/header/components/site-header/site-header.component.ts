import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-site-header',
  templateUrl: './site-header.component.html',
  styleUrls: ['./site-header.component.css']
})
export class SiteHeaderComponent implements OnInit {

  @Input() authUserId: string;
  constructor() { }

  ngOnInit() {
  }

}
