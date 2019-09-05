import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Entities/Dto(Main)/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  public initializePost(senderId: string): Post {
    return <Post>{ id: null, senderId: senderId, text:"", contentId: null, likes: 0, comments: null};
   }

  public getWallPosts(wallId: number): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post/getPosts/' + wallId);
  }

  public createPost(post: Post, wallId: number): void {
    this.http.post('/api/post/createPost/' + wallId, post);
  }
}
