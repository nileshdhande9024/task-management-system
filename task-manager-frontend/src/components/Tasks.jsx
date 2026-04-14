import React from 'react'
import { useState,useEffect } from 'react';
import axios from 'axios';
import './tasks.css'

export default function Tasks() {
    const [tasks, setTasks] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:8085/task/tasks")
      .then((res) => {
        setTasks(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
       <table className='table table-bordered table-info table-striped'>
        <thead className='table-primary'> 
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Due Date</th>
            <th>Created At</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {
            tasks.map((s)=>
            <tr>
              <td>{s.id}</td>
              <td>{s.title}</td>
              <td>{s.description}</td>
              <td>{s.priority}</td>
              <td>{s.dueDate}</td>
              <td>{s.createdAt}</td>
              <td>{s.Status}</td>
            </tr>
            )
          }
        </tbody>
      </table>
    </div>
  )
}
