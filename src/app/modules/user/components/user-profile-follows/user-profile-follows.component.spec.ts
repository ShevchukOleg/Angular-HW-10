import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfileFollowsComponent } from './user-profile-follows.component';

describe('UserProfileFollowsComponent', () => {
  let component: UserProfileFollowsComponent;
  let fixture: ComponentFixture<UserProfileFollowsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfileFollowsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfileFollowsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
