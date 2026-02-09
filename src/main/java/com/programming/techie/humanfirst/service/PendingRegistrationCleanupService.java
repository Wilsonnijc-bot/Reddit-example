package com.programming.techie.humanfirst.service;

import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.repository.UserRepository;
import com.programming.techie.humanfirst.repository.VerificationTokenRepository;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.scheduling.annotation.Scheduled;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Duration;
import java.time.Instant;
import java.util.List;

@Service
@RequiredArgsConstructor
@Slf4j
public class PendingRegistrationCleanupService {

    private final UserRepository userRepository;
    private final VerificationTokenRepository verificationTokenRepository;

    @Value("${auth.pending-registration-cleanup.enabled:true}")
    private boolean cleanupEnabled;

    @Value("${auth.pending-registration-cleanup.max-age:P3D}")
    private Duration maxAge;

    @Scheduled(cron = "${auth.pending-registration-cleanup.cron:0 0 * * * *}")
    @Transactional
    public void cleanupStalePendingRegistrations() {
        if (!cleanupEnabled) {
            return;
        }

        Instant cutoff = Instant.now().minus(maxAge);
        List<User> stalePendingUsers = userRepository.findStalePendingUsers(cutoff);
        if (stalePendingUsers.isEmpty()) {
            return;
        }

        List<Long> userIds = stalePendingUsers.stream().map(User::getUserId).toList();
        long tokenRows = verificationTokenRepository.deleteByUserUserIdIn(userIds);
        userRepository.deleteAllByIdInBatch(userIds);

        log.info("Cleaned pending registrations: usersDeleted={}, tokensDeleted={}, cutoff={}.",
                userIds.size(), tokenRows, cutoff);
    }
}
