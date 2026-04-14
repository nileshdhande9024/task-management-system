import React from 'react'
import './nav.css'
import {Link} from 'react-router-dom'
export default function Navbar() {
  return (
    <div>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/update">Update/Delete</Link></li>
          <li><Link to="/tasks">Tasks</Link></li>
        </ul>
      </nav>
    </div>
  )
}
