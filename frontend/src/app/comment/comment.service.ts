import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommentPayload } from './comment.payload';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CommentService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private httpClient: HttpClient) { }

  getAllCommentsForPost(postId: number): Observable<CommentPayload[]> {
    return this.httpClient.get<CommentPayload[]>(`${this.apiBaseUrl}/api/comments/by-post/${postId}`);
  }

  postComment(commentPayload: CommentPayload): Observable<any> {
    return this.httpClient.post<any>(`${this.apiBaseUrl}/api/comments/`, commentPayload);
  }

  getAllCommentsByUser(name: string) {
    return this.httpClient.get<CommentPayload[]>(`${this.apiBaseUrl}/api/comments/by-user/${name}`);
  }
}
