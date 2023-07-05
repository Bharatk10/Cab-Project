package com.project;

import java.util.ArrayList;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.project.model.Driver;
import com.project.model.User;
import com.project.repository.driverrepository;
import com.project.repository.userrepository;


@SpringBootApplication
public class CabBackendApplication implements CommandLineRunner {
	
	@Autowired
	userrepository urespo;
	
	@Autowired
	driverrepository drespo;

	public static void main(String[] args) {
		SpringApplication.run(CabBackendApplication.class, args);
	}

	@Override
	public void run(String... args) throws Exception {
/*
		Driver d1=new Driver("raju@gmail.com","Raju","raju@123",9919268705L,"Hyderabad");
		Driver d2=new Driver("srikanth@gmail.com","Srikanth","seth@123",9765860003L,"Vizag");
		Driver d3=new Driver("srinu@gmail.com","Srinu","srinu@123",7843262244L,"Vijayawada");
	
		ArrayList<Driver> driver=new ArrayList<Driver>();
		driver.add(d1);
		driver.add(d2);
		driver.add(d3);
		
		drespo.saveAll(driver);
		
		User u1=new User("raj@gmail.com","Raj",8919261809L,"admin","raj@123");
		User u2=new User("roy@gmail.com","Roy",7719268705L,"user","roy@123");
		User u3=new User("seth@gmail.com","Seth",8995860003L,"user","seth@123");
		User u4=new User("vikram@gmail.com","Vikram",9879262244L,"user","vikram@123");	
	
		ArrayList<User> user=new ArrayList<User>();
		user.add(u1);
		user.add(u2);
		user.add(u3);
		user.add(u4);
		urespo.saveAll(user);
		
		*/
	}

}
