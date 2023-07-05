package com.project.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.model.Driver;
import com.project.model.User;
import com.project.repository.driverrepository;
import com.project.repository.userrepository;


@Service
public class cabservice {

	@Autowired
	userrepository urespo;
	
	@Autowired
	driverrepository drespo;
	
	public Boolean verifyuserlogin(String mail,String pass) {
		
		User user= urespo.getById(mail);
		String email=user.getEmail();
		String password=user.getPassword();
		String type=user.getUserType();
		if(email.equals(mail) && password.equals(pass) && type.equals("user")) {
			return true;
		}
		return false;
	}
	public Boolean verifyadminlogin(String mail,String pass) {
		
		User user= urespo.getById(mail);
		String email=user.getEmail();
		String password=user.getPassword();
		String type=user.getUserType();
		if(email.equals(mail) && password.equals(pass) && type.equals("admin")) {
			return true;
		}
		return false;
	}
	public Boolean verifyemployeelogin(String mail,String pass) {
		
		Driver driver= drespo.getById(mail);
		String email= driver.getEmail();
		String password=driver.getPassword();
		if(email.equals(mail) && password.equals(pass)) {
			return true;
		}
		return false;
	}
	public int getprice(String pickup,String destination) {
		Integer price=null;
		if(pickup.equals(destination)) {
			price=50;
			return price;
		}
		else if((pickup.equals("Gachibowli")&&destination.equals("Madhapur"))||(pickup.equals("Madhapur")&&destination.equals("Gachibowli"))) {
			price=170;
			return price;
		}
		else if((pickup.equals("Gachibowli")&&destination.equals("Manikonda"))||(pickup.equals("Manikonda")&&destination.equals("Gachibowli"))) {
			price=230;
			return price;
		}
		else if((pickup.equals("Madhapur")&&destination.equals("Manikonda"))||(pickup.equals("Manikonda")&&destination.equals("Madhapur"))) {
			price=120;
			return price;
		}
		else if((pickup.equals("Gajuwaka")&&destination.equals("DwarakaNagar"))||(pickup.equals("DwarakaNagar")&&destination.equals("Gajuwaka"))) {
			price=140;
			return price;
		}
		else if((pickup.equals("Gajuwaka")&&destination.equals("R.K.Beach"))||(pickup.equals("R.K.Beach")&&destination.equals("Gajuwaka"))) {
			price=190;
			return price;
		}
		else if((pickup.equals("DwarakaNagar")&&destination.equals("R.K.Beach"))||(pickup.equals("R.K.Beach")&&destination.equals("DwarakaNagar"))) {
			price=70;
			return price;
		}
		else if((pickup.equals("Faraserapeta")&&destination.equals("Gollapudi"))||(pickup.equals("Gollapudi")&&destination.equals("Faraserapeta"))) {
			price=130;
			return price;
		}
		else if((pickup.equals("Guntur")&&destination.equals("Gollapudi"))||(pickup.equals("Gollapudi")&&destination.equals("Guntur"))) {
			price=220;
			return price;
		}
		else {
			price=270;
			return price;
		}
	}
	public String getplace(String pickup) {
		String place=null;
		if((pickup.equals("Gachibowli"))||(pickup.equals("Madhapur"))||(pickup.equals("Manikonda"))) {
			place="Hyderabad";
			return place;
		}
		if((pickup.equals("Gajuwaka"))||(pickup.equals("R.K.Beach"))||(pickup.equals("DwarakaNagar"))) {
			place="Vizag";
			return place;
		}
		else {
			return "Vijayawada";
		}
	}
}
