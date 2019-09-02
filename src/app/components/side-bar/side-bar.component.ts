import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  get userId(): string{
    return localStorage.getItem("userId");
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }

  public goToProfile(): void{
    this.router.navigate(['/user-profile/' + localStorage.getItem("userId")]);
  }
  public goToChatRooms(): void {
    this.router.navigate(['/chat-rooms/' + localStorage.getItem("userId")]);
  }
  public goToFriends(): void {
    this.router.navigate(['/friends/' + localStorage.getItem("userId")]);
  }
  public goToGroups(): void {
    this.router.navigate(['/groups/' + localStorage.getItem("userId")]);
  }
  public goToPhoto(): void {
    this.router.navigate(['/photos/' + localStorage.getItem("userId")]);
  }
}
