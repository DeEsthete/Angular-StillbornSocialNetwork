import { User } from './User';
import { Media } from './Media';

export class MyComment {
    public id: number;
    public sender: User;
    public text: string;
    public medias: Media[];
    public likes: number;
}