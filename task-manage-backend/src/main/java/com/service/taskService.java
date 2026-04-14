package com.service;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.entity.Task;
import com.repository.taskRepository;

@Service
public class taskService {
	@Autowired
	taskRepository trepo;
	
	public String addTask(Task t) {
		t.setCreatedAt(LocalDateTime.now());
		t.setStatus("PENDING");
		
		if(t.getPriority()!=1 && t.getPriority()!=2 && t.getPriority()!=3) {
			t.setPriority(2);
		}
		trepo.save(t);
		return "Task Added.";
	}
	public List<Task> getTasks(){
		return trepo.findAllByOrderByPriorityDesc();
	}
	public Optional<Task> getTaskById(long id) {
		return trepo.findById(id);
	}
	public String deleteTaskById(Long id) {
		Task exist=trepo.findById(id).orElse(null);
		if(exist==null) {
			return "Task Not Found.";
		}
		else {
			trepo.deleteById(id);
			return "Task is Deleted.";
		}
	}
	public String updateTaskById(Long id,Task newdata) {
		Task exist=trepo.findById(id).orElse(null);
		if(exist==null) {
			return "Task Not Found for Updation";
		}
		if(newdata.getTitle()==null
				&&newdata.getDescription()==null
				&&(newdata.getPriority()>=1||newdata.getPriority()<=3)
				&&newdata.getDueDate()==null) {
			return "No Data for Updation";
		}
		if(newdata.getTitle()!=null) {
			exist.setTitle(newdata.getTitle());
		}
		if(newdata.getDescription()!=null) {
			exist.setDescription(newdata.getDescription());
		}
		if(newdata.getPriority()>=1||newdata.getPriority()<=3) {
			exist.setPriority(newdata.getPriority());
		}
		if(newdata.getDueDate()!=null) {
			exist.setDueDate(newdata.getDueDate());
		}
		
		trepo.save(exist);
		return "Task Updated Successfully.";
	}
}
