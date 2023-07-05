package com.project.repository;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.project.model.Driver;
import com.project.model.Request;


public interface requestrepository extends JpaRepository<Request,Integer>{
	
	@Query("select c from Request c where c.status='pending' and c.driver.email= :mail")
	List <Request> findBystatus(@Param("mail") String mail );
	
	@Query("select c from Request c where c.driver.email= :mail")
	List <Request> findBystatusall(@Param("mail") String mail );
	
	List<Request> findByStatus(String status);
	
	List<Request> findByUsermail(String mail);

}
