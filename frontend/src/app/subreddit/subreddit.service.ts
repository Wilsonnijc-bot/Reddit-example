import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { SubredditModel } from './subreddit-response';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class SubredditService {
  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) { }

  getAllSubreddits(): Observable<Array<SubredditModel>> {
    return this.http.get<Array<SubredditModel>>(`${this.apiBaseUrl}/api/subreddit`);
  }

  createSubreddit(subredditModel: SubredditModel): Observable<SubredditModel> {
    return this.http.post<SubredditModel>(`${this.apiBaseUrl}/api/subreddit`,
      subredditModel);
  }
}
