import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Post } from '../Entities/Post';

@Injectable({
  providedIn: 'root'
})
export class PostsService {

  constructor(private http: HttpClient) {
  }

  public initializePost(senderId: string): Post {
    return { id=null, senderId = senderId, }
   }

  public getWallPosts(wallId: number): Observable<Post[]> {
    return this.http.get<Post[]>('/api/post/getPosts/' + wallId);
  }

  public createPost(post: Post, wallId: number): void {
    this.http.post('/api/post/createPost/' + wallId, post);
  }
}
