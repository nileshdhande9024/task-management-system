import React from 'react'
import { useState } from 'react'
import './home.css'
import axios from 'axios'

export default function Home() {
  const [Taskdata, setTaskdata] = useState({
    title:"",
    description:"",
    priority:0,
    dueDate:""
  });
  let handlechange=(e)=>{
    
    setTaskdata({
      ...Taskdata,
      [e.target.name]:e.target.value
    })
  }
  let addtask=(e)=>{
    e.preventDefault();
    let newdata = {
    title: Taskdata.title,
    description: Taskdata.description,
    priority: Taskdata.priority,
    dueDate: Taskdata.dueDate
};
    axios.post("http://localhost:8085/task/addtask",newdata)
    .then((res)=>{
      console.log("Api ")
      console.log(res.data)
      alert("Task Added Successfully.")
    })
    .catch((error)=>{
      alert("Task not added")
    })
  }
  return (
    <div >
      <form  className="parent">
        <div className="title">
        <h1>Add Task</h1>
        <p>Note:Priority only in between 1,2 and 3 like low,mid and high respectively.</p>
      </div>
      <input 
      type="text" 
      placeholder='Title'
      name="title"
      onChange={handlechange}
      value={Taskdata.title}
      />
      <input 
      type="text" 
      placeholder='Description'
      name="description"
      onChange={handlechange}
      value={Taskdata.description}
      />
      <input 
      type="number" 
      placeholder='Priority' 
      name="priority"
      onChange={handlechange}
      value={Taskdata.priority}
      />
      <input 
      type="text" 
      placeholder='yyyy-mm-dd' 
      name="dueDate"
      onChange={handlechange}
      value={Taskdata.dueDate}
      />
      <button type="button" onClick={addtask}>Add</button>
    
      </form>
    </div>
  )
}
