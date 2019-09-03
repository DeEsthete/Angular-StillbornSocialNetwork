import { Post } from './Post';
import { Media } from './Media';

export class User{
    public id: string;
    public login: string;
    public password: string;
    public email: string;
    public nickName: string;
    public isMan: boolean;
    public wallId: number;
    public medias: Media[];
    public photoCount: number;
    public friendsCount: number;
}