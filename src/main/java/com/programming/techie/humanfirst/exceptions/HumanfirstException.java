package com.programming.techie.humanfirst.exceptions;

public class HumanfirstException extends RuntimeException {
    public HumanfirstException(String exMessage, Exception exception) {
        super(exMessage, exception);
    }

    public HumanfirstException(String exMessage) {
        super(exMessage);
    }
}
