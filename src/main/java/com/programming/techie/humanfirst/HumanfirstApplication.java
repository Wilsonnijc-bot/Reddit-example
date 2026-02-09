package com.programming.techie.humanfirst;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.scheduling.annotation.EnableAsync;

@SpringBootApplication
@EnableAsync
public class HumanfirstApplication {

    public static void main(String[] args) {
        SpringApplication.run(com.programming.techie.humanfirst.HumanfirstApplication.class, args);
    }

}
