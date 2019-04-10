import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../interfaces/challenge';
import { ChallengeService } from '../../services/challenge.service';


@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
  public challenges: Array<Challenge>;
  public tabCategory: string;

  constructor(
    public challengesService: ChallengeService
  ) { }

  ngOnInit() {
    this.tabCategory = 'Upcoming';
    this.loadChallenges('Upcoming');
  }

  loadChallenges(tagType: string) {
    this.tabCategory = tagType;

    this.challengesService.getChallenges(tagType).subscribe((data: Array<Challenge>) => {
      this.challenges = data;
    });
  }

}
