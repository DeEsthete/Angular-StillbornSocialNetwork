import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  templateUrl: './side-bar.component.html',
  styleUrls: ['./side-bar.component.css']
})
export class SideBarComponent implements OnInit {

  get userId(): string{
    let answer = localStorage.getItem("userId");
    if (answer)
    {
      return answer;
    }
    else
    {
      return "null";
    }
  }

  constructor(private router: Router) { }

  ngOnInit() {
  }
}
