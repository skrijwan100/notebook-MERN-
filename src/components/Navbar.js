import React from 'react'
// import { useEffect } from 'react';

import { Link, useLocation, useNavigate } from "react-router-dom";



export default function Navbar() {
  let loction = useLocation()
  let naviget=useNavigate()
  const handlelogout=()=>{
    localStorage.removeItem('token')
    naviget("/login")
  }
  // useEffect(()=>{
  //  console.log(loction.pathname)
  // },[loction])
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">NoteBook</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className={`nav-link ${loction.pathname === "/" ? "active" : ""} `} aria-current="page" to="/">Home</Link>
              </li>
              <li className="nav-item">
                <Link className={`nav-link ${loction.pathname === "/about" ? "active" : ""} `} to="/about">about</Link>
              </li>
            </ul>
          {!localStorage.getItem('token')?<div><Link className="btn btn-outline-primary mx-2" to="/login" role="button">Login</Link>
            <Link className="btn btn-outline-info" to="/singup" role="button">Singup</Link></div>: <button onClick={handlelogout} className='btn btn-outline-primary'>Logout</button>}
          </div>
        </div>
      </nav>
    </div>
  )
}
