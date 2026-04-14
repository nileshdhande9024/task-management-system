package com.controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.entity.Task;
import com.service.taskService;

@RestController
@CrossOrigin
@RequestMapping("/task")
public class taskController {
	@Autowired
	taskService tserv;
	
	@PostMapping("/addtask")
	public String addTasks(@RequestBody Task t){
		return tserv.addTask(t);
	}
	
	@GetMapping("/tasks")
	public List<Task> getTasks(){
		return tserv.getTasks();
	}
	
	@GetMapping("/taskbyid")
	public Optional<Task> getTaskById(@RequestParam long id) {
		return tserv.getTaskById(id);
	}
	
	@DeleteMapping("/taskdeletebyid")
	public String deleteTaskById(@RequestParam long id) {
		return tserv.deleteTaskById(id);
	}
	
	@PutMapping("/updatetaskbyid")
	public String updateTaskById(@RequestParam long id,
								 @RequestBody Task t) {
		return tserv.updateTaskById(id, t);
	}
}
