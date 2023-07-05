package com.project.model;

import jakarta.persistence.Entity;
import jakarta.persistence.Id;

@Entity
public class Driver {
	
	@Id
	private String email;
	private String name;
	private String password;
	private long number;
	private String location;
	
	
	public void setEmail(String email) {
		this.email = email;
	}
	public String getEmail() {
		return email;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public long getNumber() {
		return number;
	}
	public void setNumber(long number) {
		this.number = number;
	}
	public String getLocation() {
		return location;
	}
	public void setLocation(String location) {
		this.location = location;
	}
	public Driver() {
	}
	public Driver(String email, String name, String password, long number, String location) {
		super();
		this.email = email;
		this.name = name;
		this.password = password;
		this.number = number;
		this.location = location;
	}
}
