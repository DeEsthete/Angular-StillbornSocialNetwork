import { MyComment } from './MyComment';
import { Media } from './Media';

export class Post{
    public id: number;
    public text: string;
    public medias: Media[];
    public likes: number;
    public comments: MyComment[];
}