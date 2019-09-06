import { Injectable } from '@angular/core';
import { MyMessage } from '../Entities/Dto(Main)/MyMessage';

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor() { }

  public sendMessage(message: MyMessage, roomId: number){

  }
  
}
