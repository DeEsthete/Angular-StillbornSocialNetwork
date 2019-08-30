import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from '../Entities/User';
import * as Config from '../Config'; //<==== this one

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

  public SelectedUser: User;

  constructor(private http: HttpClient) { }

  ngOnInit() {
    this.SelectedUser = this.http.get<User>(Config.MY_URL + "api/userInfo");
  }
}