import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserProfilePostsComponent } from './user-profile-posts.component';

describe('UserProfilePostsComponent', () => {
  let component: UserProfilePostsComponent;
  let fixture: ComponentFixture<UserProfilePostsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserProfilePostsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserProfilePostsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
