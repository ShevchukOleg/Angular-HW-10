import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengesItemComponent } from './challenges-item.component';

describe('ChallengesItemComponent', () => {
  let component: ChallengesItemComponent;
  let fixture: ComponentFixture<ChallengesItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChallengesItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChallengesItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
