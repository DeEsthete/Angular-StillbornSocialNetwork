import { Post } from './Post';
import { Media } from './Media';

export class User{
    public NickName: string;
    public IsMan: boolean;
    public Medias: Media[];
    public PhotoCount: number;
    public Posts: Post[];
}