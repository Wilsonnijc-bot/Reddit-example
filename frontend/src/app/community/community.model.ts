export interface CommunitySummary {
  id: number;
  name: string;
  slug: string;
  description?: string;
  avatarImageUrl?: string;
  bannerImageUrl?: string;
  // Legacy alias from backend for compatibility.
  headerImageUrl?: string;
  createdByUserId?: number;
  createdAt?: string | number;
  updatedAt?: string | number;
}

export interface CommunityDetail {
  community: CommunitySummary;
  member: boolean;
  creator: boolean;
  canEdit: boolean;
}

export interface CommunityCreatePayload {
  name: string;
  description?: string;
}

export interface CommunityUpdatePayload {
  description?: string;
  avatarImageUrl?: string;
  bannerImageUrl?: string;
  // Legacy alias accepted by backend.
  headerImageUrl?: string;
}

export interface MyCommunities {
  createdCommunities: CommunitySummary[];
  joinedCommunities: CommunitySummary[];
}
