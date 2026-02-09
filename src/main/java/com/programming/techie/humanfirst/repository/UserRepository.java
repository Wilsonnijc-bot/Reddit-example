package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.User;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.Optional;

@Repository
public interface UserRepository extends JpaRepository<User, Long> {
    Optional<User> findByUsername(String username);

    Optional<User> findFirstByUsernameAndEnabledTrueOrderByUserIdDesc(String username);

    Optional<User> findFirstByUsernameIgnoreCaseAndEnabledTrueOrderByUserIdDesc(String username);

    Optional<User> findFirstByEmailIgnoreCaseAndEnabledTrueOrderByUserIdDesc(String email);

    Optional<User> findFirstByUsernameIgnoreCaseOrderByUserIdDesc(String username);

    Optional<User> findFirstByEmailIgnoreCaseOrderByUserIdDesc(String email);

    boolean existsByUsername(String username);

    boolean existsByEmail(String email);

    boolean existsByUsernameIgnoreCase(String username);

    boolean existsByEmailIgnoreCase(String email);
}
