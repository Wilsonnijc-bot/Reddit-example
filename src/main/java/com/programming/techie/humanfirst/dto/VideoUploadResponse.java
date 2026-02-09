package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VideoUploadResponse {
    private String uploadUrl;
    private String videoKey;
}
