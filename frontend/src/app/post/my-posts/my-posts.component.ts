import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { PostModel } from '../../shared/post-model';
import { PostService } from '../../shared/post.service';

@Component({
  selector: 'app-my-posts',
  templateUrl: './my-posts.component.html',
  styleUrls: ['./my-posts.component.css']
})
export class MyPostsComponent implements OnInit {

  posts: PostModel[] = [];
  loading = true;
  deletingPostId: number | null = null;

  constructor(
    private postService: PostService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadMyPosts();
  }

  onDeleteRequested(post: PostModel): void {
    if (!post?.id || this.deletingPostId) {
      return;
    }

    const confirmed = window.confirm('Delete this post? This action cannot be undone.');
    if (!confirmed) {
      return;
    }

    this.deletingPostId = post.id;
    this.postService.deletePost(post.id).subscribe({
      next: () => {
        this.posts = this.posts.filter((item) => item.id !== post.id);
        this.deletingPostId = null;
        this.toastr.success('Post deleted');
      },
      error: (error: HttpErrorResponse) => {
        this.deletingPostId = null;
        this.toastr.error(error?.error?.message || 'Failed to delete post');
      }
    });
  }

  private loadMyPosts(): void {
    this.postService.getMyPosts().subscribe({
      next: (posts) => {
        this.posts = this.sortPostsByNewest(posts || []);
        this.loading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.toastr.error(error?.error?.message || 'Failed to load your posts');
      }
    });
  }

  private sortPostsByNewest(posts: PostModel[]): PostModel[] {
    return [...posts].sort((a, b) => {
      const createdA = new Date(a?.createdAt || 0).getTime();
      const createdB = new Date(b?.createdAt || 0).getTime();
      if (createdA !== createdB) {
        return createdB - createdA;
      }
      return (b?.id || 0) - (a?.id || 0);
    });
  }
}
