import { Component, OnInit, Input } from '@angular/core';
import { Challenge } from '../../interfaces/challenge';

@Component({
  selector: 'app-challenges-item',
  templateUrl: './challenges-item.component.html',
  styleUrls: ['./challenges-item.component.css']
})

/**
 * компонента одного змагання
 */
export class ChallengesItemComponent implements OnInit {
  /**
   * експериментальний параметр для передачі в директиву
   */
  @Input() challenge: Challenge;
  public challengeItemColor = 'blue';


  constructor() { }

  ngOnInit() {

  }
}
