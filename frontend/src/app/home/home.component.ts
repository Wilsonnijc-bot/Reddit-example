import { Component, OnInit } from '@angular/core';
import { PostModel } from '../shared/post-model';
import { PostService } from '../shared/post.service';
import { SubredditService } from '../subreddit/subreddit.service';
import { SubredditModel } from '../subreddit/subreddit-response';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  posts: Array<PostModel> = [];
  selectedDomain = 'all';
  readonly domains = [
    { key: 'all', label: 'all' },
    { key: 'discussions', label: 'discussions' },
    { key: 'ai-prospects', label: 'AI prospects' },
  ];
  private subredditIdByDomain = new Map<string, number>();

  constructor(
    private postService: PostService,
    private subredditService: SubredditService,
    private toastr: ToastrService
  ) {
  }

  ngOnInit(): void {
    this.loadDomainMapping();
  }

  selectDomain(domainKey: string) {
    if (this.selectedDomain === domainKey) {
      return;
    }
    this.selectedDomain = domainKey;
    this.loadPosts();
  }

  private loadDomainMapping() {
    this.subredditService.getAllSubreddits().subscribe((subreddits: SubredditModel[]) => {
      this.subredditIdByDomain.clear();
      const discussions = subreddits.find((item) => item.name.toLowerCase() === 'discussions');
      const aiProspects = subreddits.find((item) => item.name.toLowerCase() === 'ai prospects');

      if (discussions?.id) {
        this.subredditIdByDomain.set('discussions', discussions.id);
      }
      if (aiProspects?.id) {
        this.subredditIdByDomain.set('ai-prospects', aiProspects.id);
      }
      this.loadPosts();
    }, () => {
      this.toastr.error('Failed to load domain list');
      this.loadPosts();
    });
  }

  private loadPosts() {
    if (this.selectedDomain === 'all') {
      this.postService.getAllPosts().subscribe((post) => {
        this.posts = post;
      }, () => {
        this.posts = [];
        this.toastr.error('Failed to load posts');
      });
      return;
    }

    const subredditId = this.subredditIdByDomain.get(this.selectedDomain);
    if (!subredditId) {
      this.posts = [];
      this.toastr.error('Selected domain is not available');
      return;
    }

    this.postService.getPostsBySubreddit(subredditId).subscribe((post) => {
      this.posts = post;
    }, () => {
      this.posts = [];
      this.toastr.error('Failed to load posts for selected domain');
    });
  }
}
