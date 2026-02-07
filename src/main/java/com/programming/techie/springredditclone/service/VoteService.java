package com.programming.techie.springredditclone.service;

import com.programming.techie.springredditclone.dto.VoteDto;
import com.programming.techie.springredditclone.exceptions.PostNotFoundException;
import com.programming.techie.springredditclone.model.Post;
import com.programming.techie.springredditclone.model.Vote;
import com.programming.techie.springredditclone.model.VoteType;
import com.programming.techie.springredditclone.repository.PostRepository;
import com.programming.techie.springredditclone.repository.VoteRepository;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.Optional;

@Service
@AllArgsConstructor
public class VoteService {

    private final VoteRepository voteRepository;
    private final PostRepository postRepository;
    private final AuthService authService;

    @Transactional
    public void vote(VoteDto voteDto) {
        Post post = postRepository.findById(voteDto.getPostId())
                .orElseThrow(() -> new PostNotFoundException("Post Not Found with ID - " + voteDto.getPostId()));
        VoteType requestedVote = voteDto.getVoteType();
        Optional<Vote> existingVoteOptional =
                voteRepository.findTopByPostAndUserOrderByVoteIdDesc(post, authService.getCurrentUser());

        if (existingVoteOptional.isPresent()) {
            Vote existingVote = existingVoteOptional.get();
            VoteType existingVoteType = existingVote.getVoteType();

            if (existingVoteType == requestedVote) {
                adjustVoteCount(post, -toDirection(existingVoteType));
                voteRepository.delete(existingVote);
                postRepository.save(post);
                return;
            }

            int voteDelta = toDirection(requestedVote) - toDirection(existingVoteType);
            adjustVoteCount(post, voteDelta);
            existingVote.setVoteType(requestedVote);
            voteRepository.save(existingVote);
            postRepository.save(post);
            return;
        }

        adjustVoteCount(post, toDirection(requestedVote));
        voteRepository.save(mapToVote(requestedVote, post));
        postRepository.save(post);
    }

    private Vote mapToVote(VoteType voteType, Post post) {
        return Vote.builder()
                .voteType(voteType)
                .post(post)
                .user(authService.getCurrentUser())
                .build();
    }

    private void adjustVoteCount(Post post, int delta) {
        int currentVoteCount = post.getVoteCount() == null ? 0 : post.getVoteCount();
        post.setVoteCount(currentVoteCount + delta);
    }

    private int toDirection(VoteType voteType) {
        return voteType == VoteType.UPVOTE ? 1 : -1;
    }
}
