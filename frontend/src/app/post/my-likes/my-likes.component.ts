import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-my-likes',
  templateUrl: './my-likes.component.html',
  styleUrls: ['./my-likes.component.css']
})
export class MyLikesComponent implements OnInit {

  posts: PostModel[] = [];
  loading = true;

  constructor(
    private postService: PostService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.postService.getMyLikedPosts().subscribe({
      next: (posts) => {
        this.posts = posts || [];
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error(error?.error?.message || 'Failed to load liked posts');
      }
    });
  }
}
