import { Post } from './Post';
import { Media } from './Media';

export class User{
    public id: number;
    public nickName: string;
    public isMan: boolean;
    public medias: Media[];
    public photoCount: number;
    public posts: Post[];
}