import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/User';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';
import { UserAuthorizeViewModel } from 'src/app/Entities/UserAuthorizeViewModel';

@Component({
  selector: 'app-authorization',
  templateUrl: './authorization.component.html',
  styleUrls: ['./authorization.component.css']
})
export class AuthorizationComponent implements OnInit {

  public user: UserAuthorizeViewModel = { id: null, login: null, password: null};
  public login: string;
  public password: string;

  constructor(private router: Router, private usersService: UsersService) {}

  ngOnInit() {
  }

  public signIn() {
    this.usersService.signIn(this.user);
  }

  public forgotPassword(){
    this.router.navigate(['/forgot-password']);
  }

  public signUp(){
    this.router.navigate(['/registration']);
  }
}
