import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../../Entities/Dto(Main)/User';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public selectedUser: User;
  public isMayEdit: boolean;

  get userId(): string {
    let answer = localStorage.getItem("userId");
    if (answer) {
      return answer;
    }
    else {
      return "null";
    }
  }

  constructor(
    private userService: UsersService,
    private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.userService.getUser(id)
        .subscribe(result => this.userAccept(result));
      }
    });
  }

  private userAccept(result: any): void
  {
    this.selectedUser = result;
    if (this.selectedUser.id == localStorage.getItem("userId")) this.isMayEdit = true;
  }
}