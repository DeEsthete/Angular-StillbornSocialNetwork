import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from "../Entities/Dto(Main)/User"
import { UserAuthorizeViewModel } from '../Entities/ViewModels/UserAuthorizeViewModel';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  constructor(private http: HttpClient) {
  }
  public initializeUser(): User{
    return <User>{ id: null, login: null, password: null, nickName: null, isMan: true, email: null, wallId: null, medias: null, photoCount: null, friendsCount: null};
  }
  public getUser(id: string): Observable<User> {
    return this.http.get<User>('/api/user/' + id);
  }
  public signIn(user: UserAuthorizeViewModel): Observable<string>{
    return this.http.post<string>('/api/user/signIn', user);
  }
  public signUp(user: User): void{
    this.http.post('/api/user/signUp', user);
  }
}
