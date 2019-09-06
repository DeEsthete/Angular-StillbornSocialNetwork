import { Media } from '../Dto(Main)/Media';
import { User } from '../Dto(Main)/User';

export class MyMessageViewModel {
  public id: number;
  public chatRoomId: number;
  public sender: User;
  public text: string;
  public medias: Media[];
}