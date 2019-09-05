import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRoom } from '../Entities/Dto(Main)/ChatRoom';

@Injectable({
  providedIn: 'root'
})
export class ChatRoomsService {

  constructor(private http: HttpClient) {
  }

  public getChatRooms(userId: string): Observable<ChatRoom[]>
  {
    return this.http.get<ChatRoom[]>('/api/chat-room/getUserChatRooms/' + userId);
  }
}
