import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/Entities/User';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  user: User;

  constructor(private router: Router, private usersService: UsersService) {
    this.user = usersService.initializeUser();
  }

  ngOnInit() {
  }

  public signUp() {
    console.log(this.user);
    this.usersService.signUp(this.user);
  }

  public signIn() {
    this.router.navigate(['/authorization']);
  }
}
