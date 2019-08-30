import { MyComment } from './MyComment';
import { Media } from './Media';

export class Post{
    public Text: string;
    public Medias: Media[];
    public Likes: number;
    public Comments: MyComment[];
}