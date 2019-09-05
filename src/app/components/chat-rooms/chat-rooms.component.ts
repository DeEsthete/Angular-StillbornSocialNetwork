import { Component, OnInit } from '@angular/core';
import { ChatRoomForChatRooms } from 'src/app/Entities/ViewModels/ChatRoomForChatRooms';
import { ChatRoomsService } from 'src/app/services/chat-rooms.service';
import { ActivatedRoute } from '@angular/router';
import { ChatRoom } from 'src/app/Entities/Dto(Main)/ChatRoom';
import { UsersService } from 'src/app/Services/users.service';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-chat-rooms',
  templateUrl: './chat-rooms.component.html',
  styleUrls: ['./chat-rooms.component.css']
})
export class ChatRoomsComponent implements OnInit {

  public chatRooms: ChatRoomForChatRooms[];

  constructor(
    private chatRoomsService: ChatRoomsService,
    private usersService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.chatRoomsService.getChatRooms(id)
        .subscribe(result => this.generateChatRooms(result));
      }
    });
  }

  private generateChatRooms(chatRooms: ChatRoom[])
  {
    chatRooms.forEach(r => {
      let chatRoom: ChatRoomForChatRooms;
      chatRoom.id = r.id;
      chatRoom.creatorId = r.creatorId;
      this.usersService.getUser(chatRoom.creatorId).subscribe(result => chatRoom.creatorName = result.nickName);
      this.chatRoomsService.getLastMessage(chatRoom.id).subscribe(result => {
        this.usersService.getUser(result.senderId).subscribe(secondResult => chatRoom.lastMessageSender = secondResult.nickName);
        chatRoom.lastMessageText = result.text});
      this.chatRoomsService.getUsersNames(chatRoom.id).subscribe(result => chatRoom.userNames = result);
    });
  }
}
