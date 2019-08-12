package com.limengfei.rest.webservices.restfulwebservices.helloworld;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RestController;

//Controller
@CrossOrigin(origins="http://localhost:4200")
@RestController
public class HelloWorldController {
	//GET
	//URI - /hello-world
	//method - "Hello World"
	//@RequestMapping(method=RequestMethod.GET, path= "/hello-world")
	@GetMapping(path= "/hello-world")
	public String helloWorld() {
		return "Hello World";
	}
	//hello-world-bean
	@GetMapping(path= "/hello-world-bean")
	public HelloWorldBean helloWorldBean() {
		//throw new RuntimeException("Some error has happened! Contact Support at ***");
		return new HelloWorldBean("Hello World - Changed");
	}
	@GetMapping(path= "/hello-world/path-variable/{name}")
	public HelloWorldBean helloWorldPathVariavle(@PathVariable String name) {
		return new HelloWorldBean(String.format("Hello World, %s", name));
	}

}
