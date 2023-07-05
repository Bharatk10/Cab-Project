package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;

import com.project.model.Driver;
import com.project.model.Request;

public interface driverrepository extends JpaRepository<Driver,String>{
	
	List<Driver> findByLocation(String location);

}
