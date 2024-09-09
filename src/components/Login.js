import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';


export default function Login() {
    const[authuser,setauthuser]=useState({email:"",password:""})
    const navigate=useNavigate()


    const handleclick=async(e)=>{
        e.preventDefault()
        let url=`http://localhost:5000/api/auth/login`
        const responce= await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({email:authuser.email,password:authuser.password})
        })
        const data= await responce.json()
        console.log(data)
        if(data.sceuess){
            localStorage.setItem('token',data.authtoken)
            navigate("/")
           
            
        }
        else{
            alert("Invaid password or email")
        }


    }
    const onchange=(e)=>{
        setauthuser({...authuser, [e.target.name]: e.target.value})
    }

    return (
        <div className='my-5'>
            <form onSubmit={handleclick}>
                <div className="mb-3">
                    <label htmlFor="email" className="form-label">Email address</label>
                    <input type="email" className="form-control" id="email" name='email' aria-describedby="emailHelp" value={authuser.email} onChange={onchange} required/>
                    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
                </div>
                <div className="mb-3">
                    <label htmlFor="password" className="form-label">Password</label>
                    <input type="password" className="form-control" id="password" name='password' value={authuser.password}  onChange={onchange} required />
                </div>
           
           <div className="d-flex justify-content-center">

                <button type="submit" className="btn btn-primary ">Submit</button>
           </div>
            </form>
        </div>
    )
}
