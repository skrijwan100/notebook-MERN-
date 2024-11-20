import React from 'react'
import { useState} from 'react'
import { useNavigate } from 'react-router-dom'

export default function Singup(props) {
  console.log(process.env)
    const[authuser,setauthuser]=useState({name:"",email:"",password:""})
    const navigate=useNavigate()
   const {showAlert}=props

    const handleclick=async(e)=>{
        e.preventDefault()
        let url=`${process.env.REACT_APP_BACKEND_URL}/api/auth/register`
        const responce= await fetch(url,{
            method:'POST',
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({name:authuser.name,email:authuser.email,password:authuser.password})
        })
        const data= await responce.json()
        console.log(data)
        if(data.sceuess){
            localStorage.setItem('token',data.authtoken)
            showAlert("Successfuly singup","success")
            navigate("/")
            
        }
        else{
          
            showAlert("Invaid password or email","danger")
        }


    }
    const onchange=(e)=>{
        setauthuser({...authuser, [e.target.name]: e.target.value})
    }
  return (
    <div>
<form className='my-4'onSubmit={handleclick}>
  <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name"name="name" aria-describedby="emailHelp"  onChange={onchange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email"name="email" aria-describedby="emailHelp" onChange={onchange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' minLength={5} onChange={onchange} required/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Conform Password</label>
    <input type="password" className="form-control" id="cpassword" minLength={5} onChange={onchange} required/>
  </div>
  <button type="submit" className="btn btn-primary" >Submit</button>
</form>
    </div>
  )
}
