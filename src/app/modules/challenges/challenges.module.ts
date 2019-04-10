import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ChallengesPageComponent } from './components/challenges-page/challenges-page.component';
import { ChallengesItemComponent } from './components/challenges-item/challenges-item.component';
import { ChallengesRoutingModule } from './challenges-routing.module';
import { TimeCounterDirective } from './directives/time-counter.directive';
import { LikesViewPipe } from './pipes/likes-view.pipe';
import { AwardRoundPipe } from './pipes/award-round.pipe';


@NgModule({
  declarations: [ChallengesPageComponent, ChallengesItemComponent, TimeCounterDirective, LikesViewPipe, AwardRoundPipe],
  imports: [
    CommonModule,
    ChallengesRoutingModule
  ]
})
export class ChallengesModule { }
