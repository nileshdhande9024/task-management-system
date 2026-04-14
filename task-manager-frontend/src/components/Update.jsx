import React from 'react'
import { useState } from 'react'
import './update.css'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function Update() {
  const [id,setId]=useState(0);
  let navigate=useNavigate();
  let deletetask=()=>{
    axios.delete("http://localhost:8085/task/taskdeletebyid?id="+id)
    .then((res)=>{
      alert("Task Deleted")
    })
    .catch((error)=>{
      alert("Task Not Deleted")
    })
  }
  return (
    <div className='up_del'>
      <input type="number" placeholder='Enter task ID ' onChange={(e)=>{setId(e.target.value)}}/>
      <button onClick={()=>navigate("/")}>Update</button>
      <button onClick={deletetask}>Delete</button>
    </div>
  )
}
