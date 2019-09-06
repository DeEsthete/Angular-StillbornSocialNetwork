import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChatRoom } from '../Entities/Dto(Main)/ChatRoom';
import { MyMessage } from '../Entities/Dto(Main)/MyMessage';

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

  public getChatRoom(roomId: number): Observable<ChatRoom>
  {
    return this.http.get<ChatRoom>('/api/chat-room/getChatRoom/' + roomId);
  }

  public getLastMessage(roomId: number): Observable<MyMessage>
  {
    return this.http.get<MyMessage>('/api/chat-room/getLastMessage/' + roomId);
  }

  public getUsersNames(roomId: number): Observable<string[]>
  {
    return this.http.get<string[]>('/api/chat-room/getUserNames/' + roomId)
  }
}
