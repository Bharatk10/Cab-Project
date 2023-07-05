package com.project.model;



import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.UniqueConstraint;

@Entity
public class User {
	
	@Id
	private String email;
	private String name;
	
	private Long number;
	private String userType;
	private String password;
	
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getEmail() {
		return email;
	}
	public void setEmail(String email) {
		this.email = email;
	}
	public  long getNumber() {
		return number;
	}

	public void setNumber(long number) {
		this.number = number;
	}
	public String getUserType() {
		return userType;
	}
	public void setUserType(String userType) {
		this.userType = userType;
	}
	public String getPassword() {
		return password;
	}
	public void setPassword(String password) {
		this.password = password;
	}
	public User() {
	}
	public User( String email,String name, long number, String userType, String password) {
		super();
		this.name = name;
		this.email = email;
		this.number = number;
		this.userType = userType;
		this.password = password;
	}

}
