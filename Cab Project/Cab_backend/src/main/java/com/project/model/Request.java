package com.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.Id;
import jakarta.persistence.OneToOne;

@Entity
public class Request {
	
	@Id
	@GeneratedValue
	private int id;
	private String pickup;
	private String destination;
	private String Location;
	private String username;
	private String usermail;
	private Integer price;
	private String status;
	@OneToOne
	private Driver driver;
	
	
	
	public String getLocation() {
		return Location;
	}

	public void setLocation(String location) {
		Location = location;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	public String getPickup() {
		return pickup;
	}

	public void setPickup(String pickup) {
		this.pickup = pickup;
	}

	public String getDestination() {
		return destination;
	}

	public void setDestination(String destination) {
		this.destination = destination;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	

	public Integer getPrice() {
		return price;
	}

	public void setPrice(Integer price) {
		this.price = price;
	}

	public String getStatus() {
		return status;
	}

	public void setStatus(String status) {
		this.status = status;
	}

	public Driver getDriver() {
		return driver;
	}

	public void setDriver(Driver driver) {
		this.driver = driver;
	}
	

	public String getUsermail() {
		return usermail;
	}

	public void setUsermail(String usermail) {
		this.usermail = usermail;
	}

	public Request(String pickup, String destination, String Location ,Integer price,String username,String usermail,Driver driver, String status) {
		super();
		this.pickup = pickup;
		this.destination = destination;
		this.Location=Location;
		this.username = username;
		this.usermail=usermail;
		this.driver= driver;
		this.price = price;
		this.status = status;
	}
	

	public Request( String pickup, String destination,String Location,Integer price, String username, String usermail, 
			String status) {
	
		this.pickup = pickup;
		this.destination = destination;
		this.Location=Location;
		this.username = username;
		this.usermail = usermail;
		this.price = price;
		this.status = status;
	}

	public Request() {
	}

}
