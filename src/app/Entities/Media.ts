import { MediaType } from './MediaType';
import { MyComment } from './MyComment';

export class Media{
    public Bytes;
    public Type: MediaType;
    public Likes: number;
    public Comments: MyComment[];
}