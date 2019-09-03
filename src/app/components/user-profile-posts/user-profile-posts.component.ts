import { Component, OnInit, Input } from '@angular/core';
import { User } from 'src/app/Entities/User';
import { Post } from 'src/app/Entities/Post';
import { PostsService } from 'src/app/services/posts.service';

@Component({
  selector: 'app-user-profile-posts',
  templateUrl: './user-profile-posts.component.html',
  styleUrls: ['./user-profile-posts.component.css']
})
export class UserProfilePostsComponent implements OnInit {

  @Input() selectedUser: User;
  @Input() isMayEdit: boolean;
  public posts: Post[];
  public post: string;

  constructor(private postsService: PostsService) { }//PostService есть, а если найду ???

  ngOnInit() {
    this.postsService.getWallPosts(this.selectedUser.wallId).subscribe(result => this.posts = result);
  }

  public createPost()
  {

  }

}
