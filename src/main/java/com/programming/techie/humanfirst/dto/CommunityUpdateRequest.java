package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommunityUpdateRequest {
    private String description;
    private String avatarImageUrl;
    private String bannerImageUrl;
    // Legacy alias accepted for backward compatibility.
    private String headerImageUrl;
}
