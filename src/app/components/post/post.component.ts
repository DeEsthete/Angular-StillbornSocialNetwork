import { Component, OnInit, Input } from '@angular/core';
import { Post } from 'src/app/Entities/Post';
import { User } from 'src/app/Entities/User';
import { UsersService } from 'src/app/Services/users.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  @Input() post: Post;
  sender: User;

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    if (this.post.senderId) {
      this.userService.getUser(this.post.senderId)
        .subscribe(result => this.sender = result);
    }
  }
}
