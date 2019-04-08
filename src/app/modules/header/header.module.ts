import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SiteHeaderComponent } from './components/site-header/site-header.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [SiteHeaderComponent],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    SiteHeaderComponent
  ]
})
export class HeaderModule { }
