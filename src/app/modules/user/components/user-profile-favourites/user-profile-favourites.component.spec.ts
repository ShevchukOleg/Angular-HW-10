import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFavouritesComponent } from './user-profile-favourites.component';

describe('UserProfileFavouritesComponent', () => {
  let component: UserProfileFavouritesComponent;
  let fixture: ComponentFixture<UserProfileFavouritesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileFavouritesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFavouritesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
