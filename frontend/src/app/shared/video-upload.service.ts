import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

export interface VideoUploadUrlRequest {
  fileName: string;
  contentType: string;
}

export interface VideoUploadUrlResponse {
  uploadUrl: string;
  videoKey: string;
}

@Injectable({
  providedIn: 'root'
})
export class VideoUploadService {

  private readonly apiBaseUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient) {}

  createVideoUploadUrl(fileName: string, contentType: string): Observable<VideoUploadUrlResponse> {
    const request: VideoUploadUrlRequest = { fileName, contentType };
    return this.http.post<VideoUploadUrlResponse>(`${this.apiBaseUrl}/api/uploads/video/presign`, request);
  }

  uploadVideo(uploadUrl: string, file: File): Observable<any> {
    const contentType = file.type && file.type.length > 0 ? file.type : 'application/octet-stream';
    return this.http.put(uploadUrl, file, {
      headers: new HttpHeaders({ 'Content-Type': contentType }),
      responseType: 'text'
    });
  }
}
