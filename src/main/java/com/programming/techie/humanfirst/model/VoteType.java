package com.programming.techie.humanfirst.model;

import com.programming.techie.humanfirst.exceptions.HumanfirstException;

import java.util.Arrays;

public enum VoteType {
    UPVOTE(1), DOWNVOTE(-1),
    ;

    private int direction;

    VoteType(int direction) {
        this.direction = direction;
    }

    public static VoteType lookup(Integer direction) {
        return Arrays.stream(VoteType.values())
                .filter(value -> value.getDirection().equals(direction))
                .findAny()
                .orElseThrow(() -> new HumanfirstException("Vote not found"));
    }

    public Integer getDirection() {
        return direction;
    }
}
