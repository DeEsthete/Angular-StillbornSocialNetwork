import { MediaType } from './MediaType';
import { MyComment } from './MyComment';

export class Media{
    public id: number;
    public contentId: number;
    public bytes;
    public type: MediaType;
    public kikes: number;
    public comments: MyComment[];
}