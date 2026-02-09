package com.programming.techie.humanfirst.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class VideoUploadRequest {
    private String fileName;
    private String contentType;
}
