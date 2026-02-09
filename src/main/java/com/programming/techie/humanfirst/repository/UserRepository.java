package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);
    Optional<User> findFirstByUsernameAndEnabledTrueOrderByUserIdDesc(String username);
    boolean existsByUsername(String username);
    boolean existsByEmail(String email);
}
