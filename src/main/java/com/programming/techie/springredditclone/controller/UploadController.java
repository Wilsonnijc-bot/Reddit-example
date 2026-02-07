package com.programming.techie.springredditclone.controller;

import com.programming.techie.springredditclone.dto.VideoUploadRequest;
import com.programming.techie.springredditclone.dto.VideoUploadResponse;
import com.programming.techie.springredditclone.exceptions.SpringRedditException;
import com.programming.techie.springredditclone.service.VideoStorageService;
import lombok.RequiredArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/uploads/video")
@RequiredArgsConstructor
public class UploadController {

    private final VideoStorageService videoStorageService;

    @PostMapping("/presign")
    public ResponseEntity<VideoUploadResponse> createVideoUploadUrl(@RequestBody VideoUploadRequest request) {
        if (request == null || request.getFileName() == null || request.getFileName().isBlank()) {
            throw new SpringRedditException("fileName is required.");
        }
        VideoUploadResponse response = videoStorageService.generateUploadUrl(
                request.getFileName(),
                request.getContentType()
        );
        return new ResponseEntity<>(response, HttpStatus.OK);
    }
}
