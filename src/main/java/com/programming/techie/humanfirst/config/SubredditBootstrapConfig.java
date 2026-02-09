package com.programming.techie.humanfirst.config;

import com.programming.techie.humanfirst.model.Subreddit;
import com.programming.techie.humanfirst.repository.SubredditRepository;
import lombok.RequiredArgsConstructor;
import org.springframework.boot.CommandLineRunner;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import java.time.Instant;

@Configuration
@RequiredArgsConstructor
public class SubredditBootstrapConfig {

    private final SubredditRepository subredditRepository;

    @Bean
    CommandLineRunner subredditBootstrapRunner() {
        return args -> {
            ensureSubredditExists("discussions", "General discussions");
            ensureSubredditExists("AI prospects", "Future trends and opportunities in AI");
        };
    }

    private void ensureSubredditExists(String name, String description) {
        boolean alreadyExists = subredditRepository.findAll().stream()
                .anyMatch(item -> item.getName() != null && item.getName().equalsIgnoreCase(name));
        if (alreadyExists) {
            return;
        }

        Subreddit subreddit = Subreddit.builder()
                .name(name)
                .description(description)
                .createdDate(Instant.now())
                .build();
        subredditRepository.save(subreddit);
    }
}
