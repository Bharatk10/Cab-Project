package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.User;



public interface userrepository extends JpaRepository<User,String>{
	
	User findByName(String name);
	
	List<User> findByUserType(String type);
	


}
