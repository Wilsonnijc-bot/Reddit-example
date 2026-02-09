package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.dto.VideoUploadResponse;
import com.programming.techie.humanfirst.exceptions.HumanfirstException;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import software.amazon.awssdk.services.s3.model.GetObjectRequest;
import software.amazon.awssdk.services.s3.model.PutObjectRequest;
import software.amazon.awssdk.services.s3.presigner.S3Presigner;
import software.amazon.awssdk.services.s3.presigner.model.GetObjectPresignRequest;
import software.amazon.awssdk.services.s3.presigner.model.PutObjectPresignRequest;

import java.time.Duration;
import java.util.UUID;

@Service
@RequiredArgsConstructor
public class VideoStorageService {

    private static final Duration UPLOAD_URL_TTL = Duration.ofMinutes(15);
    private static final Duration VIEW_URL_TTL = Duration.ofHours(12);
    private static final String VIDEO_KEY_PREFIX = "videos/";

    private final S3Presigner s3Presigner;

    @Value("${aws.s3.bucket:}")
    private String bucketName;

    public VideoUploadResponse generateUploadUrl(String fileName, String contentType) {
        if (!isConfigured()) {
            throw new HumanfirstException("Video upload is not configured.");
        }

        String safeFileName = sanitizeFileName(fileName);
        String key = VIDEO_KEY_PREFIX + UUID.randomUUID() + "-" + safeFileName;
        String safeContentType = (contentType == null || contentType.isBlank())
                ? "application/octet-stream"
                : contentType;

        PutObjectRequest putObjectRequest = PutObjectRequest.builder()
                .bucket(bucketName)
                .key(key)
                .contentType(safeContentType)
                .build();

        PutObjectPresignRequest putObjectPresignRequest = PutObjectPresignRequest.builder()
                .signatureDuration(UPLOAD_URL_TTL)
                .putObjectRequest(putObjectRequest)
                .build();

        String uploadUrl = s3Presigner.presignPutObject(putObjectPresignRequest).url().toString();
        return new VideoUploadResponse(uploadUrl, key);
    }

    public String generateViewUrl(String videoKey) {
        if (!isConfigured() || videoKey == null || videoKey.isBlank()) {
            return null;
        }

        GetObjectRequest getObjectRequest = GetObjectRequest.builder()
                .bucket(bucketName)
                .key(videoKey)
                .build();

        GetObjectPresignRequest getObjectPresignRequest = GetObjectPresignRequest.builder()
                .signatureDuration(VIEW_URL_TTL)
                .getObjectRequest(getObjectRequest)
                .build();

        return s3Presigner.presignGetObject(getObjectPresignRequest).url().toString();
    }

    public boolean isConfigured() {
        return bucketName != null && !bucketName.isBlank();
    }

    private String sanitizeFileName(String originalFileName) {
        if (originalFileName == null || originalFileName.isBlank()) {
            return "video.mp4";
        }
        return originalFileName
                .replaceAll("[^a-zA-Z0-9._-]", "_")
                .replaceAll("_+", "_");
    }
}
