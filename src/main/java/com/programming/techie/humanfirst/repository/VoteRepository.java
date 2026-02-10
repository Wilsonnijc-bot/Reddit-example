package com.programming.techie.humanfirst.repository;

import com.programming.techie.humanfirst.model.Post;
import com.programming.techie.humanfirst.model.User;
import com.programming.techie.humanfirst.model.Vote;
import com.programming.techie.humanfirst.model.VoteType;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public interface VoteRepository extends JpaRepository<Vote, Long> {
    Optional<Vote> findTopByPostAndUserOrderByVoteIdDesc(Post post, User currentUser);

    List<Vote> findByUserAndVoteTypeOrderByVoteIdDesc(User user, VoteType voteType);

    void deleteByPost(Post post);
}
