import { Component, OnInit } from '@angular/core';
import { ChatRoomForChatRooms } from 'src/app/Entities/ViewModels/ChatRoomForChatRooms';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  public chatRooms: ChatRoomForChatRooms[];

  constructor() { }

  ngOnInit() {
  }

}
