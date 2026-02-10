import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CommunityService } from '../community.service';
import { MyCommunities } from '../community.model';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-my-communities',
  templateUrl: './my-communities.component.html',
  styleUrls: ['./my-communities.component.css']
})
export class MyCommunitiesComponent implements OnInit {

  myCommunities: MyCommunities = {
    createdCommunities: [],
    joinedCommunities: []
  };

  loading = true;
  selectedDomain = 'all';

  constructor(
    private communityService: CommunityService,
    private toastr: ToastrService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.communityService.getMyCommunities().subscribe({
      next: (response) => {
        this.myCommunities = response || {
          createdCommunities: [],
          joinedCommunities: []
        };
        this.loading = false;
      },
      error: () => {
        this.loading = false;
        this.toastr.error('Failed to load your communities');
      }
    });
  }

  onSidebarDomainSelected(domain: string): void {
    this.navigateToHomeDomain(domain);
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
}
