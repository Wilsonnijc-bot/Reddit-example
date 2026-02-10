import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { FormControl, FormGroup } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';
import { ToastrService } from 'ngx-toastr';
import {
  faChevronDown,
  faComments,
  faCompass,
  faHome,
  faLayerGroup,
  faPlus,
  faUsers
} from '@fortawesome/free-solid-svg-icons';
import { CommunityDetail, CommunitySummary } from '../community.model';
import { CommunityService } from '../community.service';
import { PostService } from '../../shared/post.service';
import { PostModel } from '../../shared/post-model';
import { AuthService } from '../../auth/shared/auth.service';
import { TopicDiscussionService } from '../../topics/topic-discussion.service';

@Component({
  selector: 'app-community-page',
  templateUrl: './community-page.component.html',
  styleUrls: ['./community-page.component.css']
})
export class CommunityPageComponent implements OnInit, OnDestroy {

  communityDetail: CommunityDetail | null = null;
  community: CommunitySummary | null = null;
  posts: PostModel[] = [];
  slug = '';
  loading = true;
  postsLoading = true;
  notFound = false;
  isLoggedIn = false;
  joinInProgress = false;
  editMode = false;
  saveInProgress = false;
  deletingCommunity = false;
  descriptionExpanded = false;

  selectedDomain = 'all';
  sidebarCommunities: CommunitySummary[] = [];

  readonly primaryNavItems = [
    { key: 'home', label: 'Home', icon: faHome, domain: 'all' }
  ];

  readonly homeSubItems = [
    { key: 'discussions', label: 'discussions', icon: faComments, domain: 'discussions' },
    { key: 'ai-prospects', label: 'AI prospects', icon: faLayerGroup, domain: 'ai-prospects' }
  ];

  monthlyTopicLabel = 'Topic of the month - (manually change each month)';
  weeklyTopicLabel = 'Topic of the week - (manually change each week)';

  readonly faCompass = faCompass;
  readonly faPlus = faPlus;
  readonly faChevronDown = faChevronDown;
  readonly faUsers = faUsers;

  editForm = new FormGroup({
    description: new FormControl(''),
    headerImageUrl: new FormControl('')
  });

  private routeSubscription?: Subscription;
  private readonly descriptionPreviewLimit = 220;
  private currentTopicSlug: string | null = null;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private toastr: ToastrService,
    private authService: AuthService,
    private communityService: CommunityService,
    private postService: PostService,
    private topicDiscussionService: TopicDiscussionService
  ) {
  }

  ngOnInit(): void {
    this.authService.loggedIn.subscribe((loggedIn) => {
      this.isLoggedIn = loggedIn;
    });
    this.isLoggedIn = this.authService.isLoggedIn();

    this.loadTopicLabels();
    this.loadSidebarCommunities();

    this.routeSubscription = this.route.paramMap.subscribe((params) => {
      const slug = params.get('slug') || '';
      if (!slug.trim()) {
        this.router.navigateByUrl('/communities');
        return;
      }

      this.slug = slug;
      this.editMode = false;
      this.descriptionExpanded = false;
      this.loadCommunityAndPosts();
    });
  }

  ngOnDestroy(): void {
    this.routeSubscription?.unsubscribe();
  }

  handlePrimaryNavClick(item: { domain?: string }) {
    if (item.domain) {
      this.navigateToHomeDomain(item.domain);
    }
  }

  handleHomeSubItemClick(item: { domain?: string }) {
    if (item.domain) {
      this.navigateToHomeDomain(item.domain);
    }
  }

  isItemActive(item: { domain?: string }) {
    return !!item.domain && this.selectedDomain === item.domain;
  }

  handleCommunityClick(item: CommunitySummary) {
    if (!item?.slug) {
      return;
    }

    this.router.navigate(['/communities', item.slug]);
  }

  goToCreateSubreddit() {
    this.router.navigateByUrl('/create-subreddit');
  }

  goToCurrentTopic() {
    if (this.currentTopicSlug) {
      this.router.navigate(['/topics', this.currentTopicSlug]);
      return;
    }

    this.router.navigateByUrl('/topics');
  }

  goToTopicArchive() {
    this.router.navigateByUrl('/topics/archive');
  }

  goToCommunityDirectory() {
    this.router.navigateByUrl('/communities');
  }

  goToCreatePost() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return;
    }

    const communityId = this.community?.id;
    if (!communityId) {
      this.router.navigateByUrl('/create');
      return;
    }

    this.router.navigate(['/create'], {
      queryParams: { communityId }
    });
  }

  toggleEditMode() {
    if (!this.community || !this.communityDetail?.canEdit || this.deletingCommunity) {
      return;
    }

    this.editMode = !this.editMode;
    if (this.editMode) {
      this.editForm.patchValue({
        description: this.community.description || '',
        headerImageUrl: this.community.headerImageUrl || ''
      });
    }
  }

  saveCommunityChanges() {
    if (!this.communityDetail?.canEdit || !this.community || this.deletingCommunity) {
      return;
    }

    this.saveInProgress = true;
    this.communityService.updateCommunity(this.slug, {
      description: this.editForm.get('description')?.value || '',
      headerImageUrl: this.editForm.get('headerImageUrl')?.value || ''
    }).subscribe({
      next: (updatedCommunity) => {
        this.community = updatedCommunity;
        this.communityDetail = {
          ...this.communityDetail,
          community: updatedCommunity
        };
        this.editMode = false;
        this.saveInProgress = false;
        this.toastr.success('Community updated');
      },
      error: (error: HttpErrorResponse) => {
        this.saveInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to update community');
      }
    });
  }

  deleteCommunity() {
    if (!this.communityDetail?.canEdit || !this.community || this.deletingCommunity) {
      return;
    }

    const communityName = this.community.name;
    const typedName = window.prompt(`Type "${communityName}" to confirm community deletion.`);
    if (typedName === null) {
      return;
    }

    if (typedName.trim() !== communityName) {
      this.toastr.error('Community name does not match. Delete cancelled.');
      return;
    }

    this.deletingCommunity = true;
    this.communityService.deleteCommunity(this.slug).subscribe({
      next: () => {
        this.toastr.success('Community deleted');
        this.router.navigateByUrl('/communities');
      },
      error: (error: HttpErrorResponse) => {
        this.deletingCommunity = false;
        this.toastr.error(error?.error?.message || 'Failed to delete community');
      }
    });
  }

  joinCommunity() {
    if (!this.isLoggedIn) {
      this.router.navigateByUrl('/login');
      return;
    }

    if (!this.slug || this.joinInProgress || this.deletingCommunity) {
      return;
    }

    this.joinInProgress = true;
    this.communityService.joinCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.joinInProgress = false;
        this.toastr.success('Joined community');
      },
      error: (error: HttpErrorResponse) => {
        this.joinInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to join community');
      }
    });
  }

  leaveCommunity() {
    if (!this.isLoggedIn || !this.communityDetail?.member || this.communityDetail?.creator) {
      return;
    }

    if (!this.slug || this.joinInProgress || this.deletingCommunity) {
      return;
    }

    this.joinInProgress = true;
    this.communityService.leaveCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.joinInProgress = false;
        this.toastr.success('Left community');
      },
      error: (error: HttpErrorResponse) => {
        this.joinInProgress = false;
        this.toastr.error(error?.error?.message || 'Failed to leave community');
      }
    });
  }

  toggleDescription() {
    this.descriptionExpanded = !this.descriptionExpanded;
  }

  shouldShowDescriptionToggle(): boolean {
    return this.getCommunityDescription().length > this.descriptionPreviewLimit;
  }

  getDisplayedDescription(): string {
    const description = this.getCommunityDescription();

    if (this.descriptionExpanded || description.length <= this.descriptionPreviewLimit) {
      return description;
    }

    return `${description.slice(0, this.descriptionPreviewLimit).trim()}...`;
  }

  getCommunityAvatarLabel(): string {
    const name = this.community?.name || '';
    return name.trim().charAt(0).toUpperCase() || 'C';
  }

  getCommunityTagline(): string {
    const description = this.getCommunityDescription();
    if (description.length <= 110) {
      return description;
    }

    return `${description.slice(0, 110).trim()}...`;
  }

  private navigateToHomeDomain(domain: string) {
    this.selectedDomain = domain;

    if (domain === 'all') {
      this.router.navigate(['/']);
      return;
    }

    this.router.navigate(['/'], {
      queryParams: { domain }
    });
  }

  private loadTopicLabels() {
    this.topicDiscussionService.getCurrentTopic().subscribe((topic) => {
      this.monthlyTopicLabel = `Topic of the month - ${topic.monthTitle}`;
      this.weeklyTopicLabel = `Topic of the week - ${topic.weekTitle}`;
      this.currentTopicSlug = topic.slug || null;
    }, () => {
      this.currentTopicSlug = null;
    });
  }

  private loadSidebarCommunities() {
    this.communityService.getAllCommunities().subscribe({
      next: (communities) => {
        this.sidebarCommunities = communities || [];
      },
      error: () => {
        this.sidebarCommunities = [];
        this.toastr.error('Failed to load communities');
      }
    });
  }

  private loadCommunityAndPosts() {
    this.loading = true;
    this.postsLoading = true;
    this.notFound = false;
    this.posts = [];

    this.communityService.getCommunity(this.slug).subscribe({
      next: (detail) => {
        this.communityDetail = detail;
        this.community = detail.community;
        this.descriptionExpanded = false;
        this.loading = false;
        this.loadCommunityPosts();
      },
      error: (error: HttpErrorResponse) => {
        this.loading = false;
        this.postsLoading = false;
        this.notFound = error.status === 404;
        if (!this.notFound) {
          this.toastr.error(error?.error?.message || 'Failed to load community');
        }
      }
    });
  }

  private loadCommunityPosts() {
    this.postService.getPostsByCommunity(this.slug).subscribe({
      next: (posts) => {
        this.posts = this.sortPostsByNewest(posts || []);
        this.postsLoading = false;
      },
      error: (error: HttpErrorResponse) => {
        this.postsLoading = false;
        if (error.status === 404) {
          this.notFound = true;
          return;
        }
        this.toastr.error(error?.error?.message || 'Failed to load posts');
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

  private getCommunityDescription(): string {
    const description = this.community?.description?.trim();
    return description && description.length > 0 ? description : 'No community description yet.';
  }
}
