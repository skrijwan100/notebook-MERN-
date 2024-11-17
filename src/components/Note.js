import React, { useEffect, useRef,useState } from 'react'
import Notecontext from '../context/notecontext'
import { useContext } from 'react'
import Noteitem from './Noteitem'
import Addnote from './Addnote'
import { useNavigate } from 'react-router-dom'
export default function Note(props) {
  const{showAlert}=props
  const contextnotes = useContext(Notecontext)
  const { note,getallnote,editenote } = contextnotes

 
  const[notes,setnotes]=useState({id:"",etitle:"",edisc:"",etag:""})
  // console.log(notes)
  let naviget=useNavigate()
  const onchange = (e) => {
    setnotes((prevNotes) => ({
      ...prevNotes, 
      [e.target.name]: e.target.value
    }));
  };
  const handleclick=(e)=>{

    editenote(notes.id,notes.etitle,notes.edisc,notes.etag)
    showAlert("update successful","success")
    refclose.current.click()
    console.log("Form submitted:", notes.etitle);
    // addnote(note.title,note.disc,note.tag)
  }
  useEffect(() => {
    if (localStorage.getItem('token')) {
      getallnote();
    } else {
      naviget("/login");
    }
  }, [getallnote, naviget]);
  const updatenote=(currentnode)=>{
    ref.current.click()
    setnotes({id:currentnode._id,etitle:currentnode.title,edisc:currentnode.disc,etag:currentnode.tag})


  }
  const ref=useRef(null)
  const refclose=useRef(null)
  return (
    <>

<button type="button" className="btn btn-primary d-none" ref={ref} data-bs-toggle="modal" data-bs-target="#exampleModal">
  Launch demo modal
</button>


<div className="modal fade" id="exampleModal"  tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="exampleModalLabel">Update Note</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <form>
      <div className="mb-3">
        <label htmlFor="etitle" className="form-label">Title</label>
        <input type="text" className="form-control" id="etitle" name='etitle' value={notes.etitle} onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="ediscripstion" className="form-label">Description</label>
        <input type="text" className="form-control" id="edisc" name='edisc' value={notes.edisc} onChange={onchange} />
      </div>
      <div className="mb-3">
        <label htmlFor="etag" className="form-label">Tag</label>
        <input type="text" className="form-control" id="etag" name='etag' value={notes.etag} onChange={onchange} />
      </div>
    </form>
      
      </div>
      <div className="modal-footer">
        <button ref={refclose}type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button disabled={notes.etitle.length<5 || notes.edisc.length<5} onClick={handleclick} type="button" className="btn btn-primary">Update note</button>
      </div>
    </div>
  </div>
</div>
      <Addnote showAlert={showAlert}/>
    <div>
      <div className="row my-3 d-flex" style={{ backgroundColor: "#0dcaf0" }}>
        <center style={{ backgroundColor: "#rgb(13 240 95)" }}><h1>Your note</h1></center>
        <div className="container text-center my-3 fs-3 fw-bold c-red " style={{color:"#0100ff"}}>
        {note.length===0 && "NO NOTE TO SHOW"}</div>
        {note.map((note) => {
          return (
          

              <Noteitem key={`${note._id}`} updatenote={updatenote} note={note} showAlert={showAlert} />
          ) 
        })}

      </div>
    </div>
        </>
  )
}
