import { Component, OnInit } from '@angular/core';
import { Challenge } from '../../interfaces/challenge';
import { ChallengeService } from '../../services/challenge.service';


@Component({
  selector: 'app-challenges-page',
  templateUrl: './challenges-page.component.html',
  styleUrls: ['./challenges-page.component.css']
})
export class ChallengesPageComponent implements OnInit {
  /**
   * БД змагань однієї категорії
   */
  public challenges: Array<Challenge>;
  /**
   * tabCategory - викор. для візуалізації активної категорії
   */
  public tabCategory: string;

  constructor(
    public challengesService: ChallengeService
  ) { }
/**
 * при старті компоненти присвоюється стартова категорія змагань, віиконується запуск методу
 * заватаження данних
 */
  ngOnInit() {
    this.tabCategory = 'Upcoming';
    this.loadChallenges('Upcoming');
  }
  /**
   * loadChallenges - метод що звертається до сервісу за данними про змагання та
   * піжписаний на відповідб серверу
   * @param tagType - параметр що визначає ип змагань
   */
  loadChallenges(tagType: string) {
    this.tabCategory = tagType;

    this.challengesService.getChallenges(tagType).subscribe((data: Array<Challenge>) => {
      this.challenges = data;
    });
  }
}
