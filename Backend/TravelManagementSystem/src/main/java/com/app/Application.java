package com.app;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ConfigurableApplicationContext;

@SpringBootApplication
public class Application {

	public static void main(String[] args) {
		SpringApplication.run(Application.class, args);
		//ConfigurableApplicationContext app = SpringApplication.run(Application.class, args);
		//System.out.println(app.getBean("adminServiceImpl"));
		//this run method returns ConfigurableApplicationContext which is a class 
	}

}
