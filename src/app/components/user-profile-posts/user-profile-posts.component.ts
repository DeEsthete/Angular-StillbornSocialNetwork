import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Entities/User';

@Component({
  selector: 'app-user-profile-posts',
  templateUrl: './user-profile-posts.component.html',
  styleUrls: ['./user-profile-posts.component.css']
})
export class UserProfilePostsComponent implements OnInit {

  @Input() selectedUser: User;
  @Input() isMayEdit: boolean;

  constructor() { }//PostService есть, а если найду ???

  ngOnInit() {
    //PostService.getPosts(userId);
  }

  public createPost()
  {
    
  }

}
