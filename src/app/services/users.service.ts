import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../Entities/User"
import { UserAuthorizeViewModel } from '../Entities/UserAuthorizeViewModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }
  public initializeUser(): User{
    return <User>{ id: null, login: null, password: null, nickName: null, isMan: true, email: null, medias: null, photoCount: null, friendsCount: null, posts: null };
  }
  public getUser(id: string): Observable<User> {
    return this.http.get<User>('/api/user/' + id);
  }
  public signIn(user: UserAuthorizeViewModel): Observable<boolean>{
    return this.http.post<boolean>('/api/user/signIn', user);
  }
  public signUp(user: User): void{
    this.http.post('/api/user/signUp', user);
  }
}
