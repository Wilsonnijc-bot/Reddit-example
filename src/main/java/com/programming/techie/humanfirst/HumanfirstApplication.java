package com.programming.techie.humanfirst;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;

@SpringBootApplication
@EnableAsync
@EnableScheduling
public class HumanfirstApplication {

    public static void main(String[] args) {
        SpringApplication.run(com.programming.techie.humanfirst.HumanfirstApplication.class, args);
    }

}
