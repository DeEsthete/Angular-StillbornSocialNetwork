import { MyComment } from './MyComment';
import { Media } from './Media';

export class Post{
    public id: number;
    public senderId: string;
    public text: string;
    public contentId: number;
    public likes: number;
    public comments: MyComment[];
}