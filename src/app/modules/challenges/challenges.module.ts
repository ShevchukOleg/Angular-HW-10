import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';
import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesRoutingModule } from './challenges-routing.module';

@NgModule({
  declarations: [ChallengesPageComponent, ChallengesItemComponent],
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule { }
