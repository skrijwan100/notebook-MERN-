import React, { useState } from 'react'
import Notecontext from '../context/notecontext'
import { useContext } from 'react'

export default function Addnote() {
    const contextnotes = useContext(Notecontext)
  const { addnote } = contextnotes
  const[note,setnote]=useState({title:"",disc:"",tag:""})
  const onchange=(e)=>{
    setnote({...note,[e.target.name] : e.target.value})
  }
  const handleclick=(e)=>{
    e.preventDefault();
    // console.log("Form submitted:", note.title);
    addnote(note.title,note.disc,note.tag)
  }
  return (
    <div className=" my-3">
    <h1>Add a note</h1>
    <form>
      <div className="mb-3">
        <label htmlFor="title" className="form-label">Title</label>
        <input type="text" className="form-control" id="title" name='title' onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="discripstion" className="form-label">Description</label>
        <input type="text" className="form-control" id="disc" name='disc' onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="tag" className="form-label">Tag</label>
        <input type="text" className="form-control" id="tag" name='tag' onChange={onchange} />
      </div>
      <button type="submit" className="btn btn-primary" onClick={handleclick}>Submit</button>
    </form>
  </div>
  )
}
