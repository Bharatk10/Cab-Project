package com.project.controller;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.servlet.ModelAndView;

import com.project.exception.ResourceNotFoundException;
import com.project.model.Driver;
import com.project.model.Request;
import com.project.model.User;
import com.project.repository.driverrepository;
import com.project.repository.requestrepository;
import com.project.repository.userrepository;
import com.project.service.cabservice;


@RestController

@CrossOrigin(origins="http://localhost:3000")
@RequestMapping("/backend")
public class Controller {
	
	@Autowired
	userrepository urespo;
	
	@Autowired
	private cabservice service;
	
	@Autowired
	driverrepository drespo;
	
	@Autowired
	requestrepository rrespo;
	
	@PostMapping("/ulogin")
	public Object userlogin(@ModelAttribute("email") String email,@ModelAttribute("password") String password) {
		Boolean b=service.verifyuserlogin(email, password);
		Map<String,Object> object = new HashMap<>();
		if(b)
			object.put("success","true");
		else
			object.put("success","fail");
		return object;
		
	}
	@PostMapping("/alogin")
	public Object adminlogin(@ModelAttribute("email") String email,@ModelAttribute("password") String password) {
		Boolean b=service.verifyadminlogin(email, password);
		Map<String,Object> object = new HashMap<>();
		if(b)
			object.put("success","true");
		else
			object.put("success","fail");
		return object;
		
	}
	@PostMapping("/elogin")
	public Object employeelogin(@ModelAttribute("email") String email,@ModelAttribute("password") String password) {
		Boolean b=service.verifyemployeelogin(email, password);
		Map<String,Object> object = new HashMap<>();
		if(b)
			object.put("success","true");
		else
			object.put("success","fail");
		return object;
		
	}
	@PostMapping("/user")
	public User adduser(@RequestBody User user) {
		
		return urespo.save(user);
	}
	@PostMapping("/driver")
	public Driver adddriver(@RequestBody Driver driver) {
		
		return drespo.save(driver);
	}
	
	@PostMapping("/book")
	public  Request getdriver(@ModelAttribute("pickup") String pickup,@ModelAttribute("destination") String destination,@ModelAttribute("email") String email) {
		
		Integer price=service.getprice(pickup, destination);
		String place=service.getplace(pickup);
		User user =urespo.getById(email);
		String umail=user.getEmail();
		Request request = new Request(pickup,destination,place,price,user.getName(),email,"Request raised");
		return rrespo.save(request);
	}
	@PutMapping("/book/{id}")
	public ResponseEntity<Request> updaterequest(@PathVariable int id,@ModelAttribute("demail") String demail){
		Request req=rrespo.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Request is not listted with id:"+id));
		Driver driver= drespo.getById(demail);
		req.setDriver(driver);
		req.setStatus("Pending");
		
		Request request= rrespo.save(req);
		
		return ResponseEntity.ok(request);
			
	}
	@PutMapping("/booking/{id}")
	public ResponseEntity<Request> request(@PathVariable int id,@ModelAttribute("status") String status){
		Request req=rrespo.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Request is not listted with id:"+id));
		req.setStatus(status);
		
		Request request= rrespo.save(req);
		return ResponseEntity.ok(request);	
	}
	@RequestMapping("/user")
	public List<User> getusers(){
		
		return urespo.findByUserType("user");		
	}
	@RequestMapping("/driver")
	public List<Driver> getdrivers(){
		return drespo.findAll();
	}
	@RequestMapping("/allrequests")
	public List<Request> getallrequest(){
		return rrespo.findAll();
	}
	@RequestMapping("/getAllraisedrequests")
	public List<Request> getallraisedrequests() {
		
		return rrespo.findByStatus("Request raised");
	}
	@RequestMapping("/getAllpending")
	public List<Request> getallpendingrequests() {
		
		return rrespo.findByStatus("Pending");
	}
	@RequestMapping("/getAllaccepted")
	public List<Request> getallacceptedrequests() {
		
		return rrespo.findByStatus("Accepted");
	}
	@RequestMapping("/getAllrejected")
	public List<Request> getallrejectedrequests() {
		
		return rrespo.findByStatus("Rejected");
	}
	@RequestMapping("/pendingrequest/{email}")
	public  List<Request> getallpending_requestbydriver(@PathVariable("email") String email) {
	
		return rrespo.findBystatus(email);
	}
	@RequestMapping("/all/{email}")
	public  List<Request> getall_requestbydriver(@PathVariable("email") String email) {
	
		return rrespo.findBystatusall(email);
	}
	@PutMapping("/confirm/{id}")
	public ResponseEntity<Request> confirmrequest(@PathVariable int id,@ModelAttribute("status") String status){
		Request req=rrespo.findById(id).
				orElseThrow(()-> new ResourceNotFoundException("Request is not listted with id:"+id));
		req.setStatus(status);
		
		Request request= rrespo.save(req);
		return ResponseEntity.ok(request);	
	}
	@RequestMapping("/getAllcompleted")
	public List<Request> getallcompletedrequests() {
		
		return rrespo.findByStatus("Completed");
	}
	@PostMapping("/getdriverbylocation")
	public List<Driver> getdriverrs(@ModelAttribute("location") String location){
		
		return drespo.findByLocation(location);
	}
	@RequestMapping("/getallrides/{umail}")
	public List<Request> getreq(@PathVariable String umail){
		
		return rrespo.findByUsermail(umail);
	}

	
}
