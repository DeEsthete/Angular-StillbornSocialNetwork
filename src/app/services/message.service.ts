import { Injectable } from '@angular/core';
import { MyMessage } from '../Entities/Dto(Main)/MyMessage';
import { MyMessageViewModel } from '../Entities/ViewModels/MyMessageViewModel';
import { UsersService } from './users.service';
import { ContentsService } from './contents.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient,
    private usersService: UsersService,
    private contentsService: ContentsService) { }

  public sendMessage(message: MyMessage, roomId: number){
    return this.http.post<string>('/hubs/chat/', message);
  }

  public getMessageViewModel(message: MyMessage): MyMessageViewModel{
    let myMessageViewModel: MyMessageViewModel;
    myMessageViewModel.id = message.id;
    myMessageViewModel.chatRoomId = message.id;
    myMessageViewModel.text = message.text;
    this.usersService.getUser(localStorage.getItem("userId")).subscribe(result => myMessageViewModel.sender = result);
    this.contentsService.getMedias(message.contentId).subscribe(result => myMessageViewModel.medias = result);
    return myMessageViewModel;
  }
  
}
