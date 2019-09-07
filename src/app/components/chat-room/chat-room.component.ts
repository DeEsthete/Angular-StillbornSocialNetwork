import { Component, OnInit, Input } from '@angular/core';
import { ChatRoom } from 'src/app/Entities/Dto(Main)/ChatRoom';
import { ChatRoomsService } from 'src/app/services/chat-rooms.service';
import { ActivatedRoute } from '@angular/router';
import { MessageService } from 'src/app/services/message.service';
import * as signalR from '@aspnet/signalr';
import { MyMessage } from 'src/app/Entities/Dto(Main)/MyMessage';
import { MyMessageViewModel } from 'src/app/Entities/ViewModels/MyMessageViewModel';
import { UsersService } from 'src/app/Services/users.service';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css']
})
export class ChatRoomComponent implements OnInit {

  @Input() usersNames: string[];
  public messages: MyMessageViewModel[];
  public chatRoom: ChatRoom;
  private _hubConnection: signalR.HubConnection;
  public createText: string;

  constructor(
    private chatRoomsService: ChatRoomsService,
    private messageService: MessageService,
    private usersService: UsersService,
    private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const id = params['id'];
      if (id) {
        this.chatRoomsService.getChatRoom(id).subscribe(result => this.chatRoom = result);
      }
    });

    this.chatRoomsService.getUsersNames(this.chatRoom.id).subscribe(result => this.usersNames = result);

    this._hubConnection = new signalR.HubConnectionBuilder()
      .withUrl('/hubs/chat',{
        accessTokenFactory: () => localStorage.getItem('token') 
      }).build();
 
    this._hubConnection
      .start()
      .then(() => console.log('Connection started'))
      .catch(err => console.log('Error while starting connection: ' + err));

    this._hubConnection.on("Receive", (message: MyMessage) => {
      this.messages.push(this.messageService.getMessageViewModel(message));
    });
  }

  public sendMessage()
  {
    debugger;
    let message: MyMessage;
    message.id = 1;
    message.chatRoomId = this.chatRoom.id;
    message.senderId = localStorage.getItem("userId");
    message.text = this.createText;
    message.contentId = null;
    this.messages.push(this.messageService.getMessageViewModel(message));
    this.messageService.sendMessage(message, this.chatRoom.id);
  }
}
