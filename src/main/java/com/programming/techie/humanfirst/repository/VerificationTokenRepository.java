package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.VerificationToken;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Collection;
import java.util.Optional;

@Repository
public interface VerificationTokenRepository extends JpaRepository<VerificationToken, Long> {
    Optional<VerificationToken> findByToken(String token);

    long deleteByUserUserId(Long userId);

    long deleteByUserUserIdIn(Collection<Long> userIds);
}
