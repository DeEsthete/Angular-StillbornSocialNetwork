import { User } from './User';
import { Media } from './Media';

export class MyComment {
    public Sender: User;
    public Text: string;
    public Medias: Media[];
    public Likes: number;
}